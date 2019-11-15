require('isomorphic-fetch');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();
const Router = require('koa-router');
const { installAgeGate, updateAgeGate, uninstallAgeGate, checkVariables } = require('./server/router');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, API_VERSION } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session(server));
  server.use(bodyParser());
  server.keys = [SHOPIFY_API_SECRET_KEY];

  router.post('/updateAgeGate', updateAgeGate);
  router.post('/uninstallAgeGate', uninstallAgeGate);
  router.get('/checkVariables', checkVariables );
  
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_themes', 'write_themes', 'read_script_tags', 'write_script_tags'],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        console.log(shop);
          ctx.cookies.set('shopOrigin', shop, { httpOnly: false });
        ctx.redirect('/');
        console.log('installing...');
        installAgeGate(ctx, next);
      },
    }),
  );
    
  router.get('*', verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });
  
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});