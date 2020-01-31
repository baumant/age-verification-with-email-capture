require('isomorphic-fetch');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const send = require('koa-send');

dotenv.config();
const Router = require('koa-router');
const { installAgeVerification, updateAgeVerification, uninstallAgeVerification, checkVariables } = require('./server/router');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, API_VERSION } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.proxy = true;
  server.use(session({ secure: true, sameSite: 'none' }, server));
  server.use(bodyParser());
  server.keys = [SHOPIFY_API_SECRET_KEY];

  router.post('/updateAgeVerification', updateAgeVerification, ctx => {
    ctx.res.statusCode = 201;
  });
  router.post('/uninstallAgeVerification', uninstallAgeVerification, ctx => {
    ctx.res.statusCode = 200;
  });
  router.get('/checkVariables', checkVariables, ctx => {
    ctx.res.statusCode = 200;
  });

  router.get('/age-verification-with-email-capture.js', async(ctx) => {
    ctx.type = 'text/javascript';
    await send(ctx, 'public/age-verification-with-email-capture.js', {"maxage":1209600000}); 
  });

  router.get('/privacy-policy', async(ctx) => {
    ctx.type = 'text/html';
    await send(ctx, 'public/privacy-policy.html', {"maxage":1209600000}); 
  });

  router.post(['/customer-redact', '/shop-redact', '/customer-datareq'], async(ctx) => {
    ctx.res.statusCode = 200;
  });
  
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_themes', 'write_themes', 'read_script_tags', 'write_script_tags'],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        console.log(shop);
          ctx.cookies.set('shopOrigin', shop, { httpOnly: false, secure: true, sameSite: 'none' });
        ctx.redirect('/');
        console.log('installing...');
        installAgeVerification(ctx);
      },
    }),
  );
    
  router.get(['/','/help','/updateAgeVerification','/uninstallAgeVerification','/checkVariables'], verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });
  
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});