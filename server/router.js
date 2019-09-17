require('isomorphic-fetch');
const dotenv = require('dotenv');
dotenv.config();

const { API_VERSION } = process.env;

async function installAgeGate (ctx, next) {
  
  console.log('INSTALLING AGE GATE: \n', ctx.session);
  
  const themeApiUrl = `admin/api/${API_VERSION}/themes.json`;
  const options = {
    credentials: 'include',
    headers: {
      'X-Shopify-Access-Token': ctx.session.accessToken,
      'Content-Type': 'application/json',
    },
  };
  const optionsWithGet = { ...options, method: 'GET' };
  let activeThemeId;
  fetch(`https://${ctx.session.shop}/${themeApiUrl}`, optionsWithGet)
    .then((response) => response.json())
    // getting active theme ID
    .then((myJson) => {
      for (var i = 0; i < myJson.themes.length; i++) {
        if(myJson.themes[i].role == 'main') {
          activeThemeId = myJson.themes[i].id;
          console.log('ACTIVE THEME ID: ', activeThemeId);
          return activeThemeId;
        }
      }
    })
    // Add include to theme.liquid
    .then((activeThemeId) => {
      fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json?asset[key]=layout/theme.liquid`, optionsWithGet )
        .then((response) => response.json())
        .then((themeAsset) => {
          console.log('returned: ', themeAsset.asset.key);
          return themeAsset.asset.value;
        })
        .then((themeLiquid) => {
          const hasAgeGate = themeLiquid.indexOf("{% include 'age-gate' %}");
          const bodyPosition = themeLiquid.indexOf('</body>');
          if(hasAgeGate == -1){
            const newTheme = themeLiquid.slice(0,bodyPosition) + "{% include 'age-gate' %}" + themeLiquid.slice(bodyPosition);
            return newTheme;
          } else {
            console.log('age gate already exists');
            const newTheme = 'noUpdate';  
            return newTheme;
          }
          
        })
        // Upload updated theme.liquid to Shopify store
        .then((newTheme) => {
          if(newTheme != 'noUpdate'){
            const stringifiedAssetParams = JSON.stringify({
              asset: {
                key: "layout/theme.liquid",
                value: newTheme
              }
            })
            const putOptions = {
              method: 'PUT',
              body: stringifiedAssetParams,
              credentials: 'include',
              headers: {
                'X-Shopify-Access-Token': ctx.session.accessToken,
                'Content-Type': 'application/json',
              },
            }
            fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json`, putOptions )
              .then((response) => response.json())
              .then((themeUpdateResponse) => {
                console.log('updated: ', themeUpdateResponse.asset.key, ' at ', themeUpdateResponse.asset.updated_at);
              })
          }
        })
        .catch((error) => console.log('error', error));
      //adding age-gate.liquid snippet
      const stringifiedAssetParams = JSON.stringify({
        asset: {
          key: "snippets/age-gate.liquid",
          src: "https://raw.githubusercontent.com/baumant/age-gate/master/age-gate.liquid"
        }
      })
      const putOptions = {
        method: 'PUT',
        body: stringifiedAssetParams,
        credentials: 'include',
        headers: {
          'X-Shopify-Access-Token': ctx.session.accessToken,
          'Content-Type': 'application/json',
        },
      }
      console.log(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json`, putOptions);
      fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json`, putOptions )
        .then((response) => response.json())
        .then((myJson) => {
          console.log(myJson);
        })
        .catch((error) => console.log('error', error));
    })
    .catch((error) => console.log('error', error));

  await next();
    
};

async function checkVariables(ctx, next) {
  console.log('CHECKING VARIABLES: \n')
  console.log(ctx.session);

  //get the active theme ID for api calls
  const themeApiUrl = `admin/api/${API_VERSION}/themes.json`;
  const options = {
    credentials: 'include',
    headers: {
      'X-Shopify-Access-Token': ctx.session.accessToken,
      'Content-Type': 'application/json',
    },
  };
  const optionsWithGet = { ...options, method: 'GET' };
  let activeThemeId = await fetch(`https://${ctx.session.shop}/${themeApiUrl}`, optionsWithGet)
      .then((response) => response.json())
      // getting active theme ID
      .then((myJson) => {
        for (var i = 0; i < myJson.themes.length; i++) {
          if(myJson.themes[i].role == 'main') {
            return myJson.themes[i].id;
          }
        }
      })
      .catch((error) => console.log('error', error));
  console.log('ACTIVE THEME ID: ', activeThemeId);

  let ageGateVariables = await fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json?asset[key]=snippets/age-gate.liquid`, optionsWithGet )
    .then((response) => response.json())
    .then((themeAsset) => {
      console.log('returned: ', themeAsset.asset.key);
      return themeAsset.asset.value;
    })
    .then((ageGateLiquid) => {

      const ageVariablePos = ageGateLiquid.indexOf('assign age = ');
      const afterAgeVariablePos = ageGateLiquid.indexOf(' %}<!-- age variable -->');
      let ageVariable = ageGateLiquid.slice(ageVariablePos+13,afterAgeVariablePos);

      const rememberDaysVariablePos = ageGateLiquid.indexOf('assign rememberDays = ');
      const afterRememberDaysVariablePos = ageGateLiquid.indexOf(' %}<!-- rememberDays -->');
      let rememberVariable = ageGateLiquid.slice(rememberDaysVariablePos+22, afterRememberDaysVariablePos);
      
      const dobVariablePos = ageGateLiquid.indexOf('enter_date_of_birth = ');
      const afterDOBVariablePos = ageGateLiquid.indexOf(' %}<!-- enter_date_of_birth -->');
      let dobVariable = ageGateLiquid.slice(dobVariablePos+22, afterDOBVariablePos);

      const redirectUrlVariablePos = ageGateLiquid.indexOf('redirectUrl = "');
      const afterRedirectUrlVariablePos = ageGateLiquid.indexOf('" %}<!-- redirectUrl -->');
      let redirectVariable = ageGateLiquid.slice(redirectUrlVariablePos+15, afterRedirectUrlVariablePos);

      const backgroundUrlVariablePos = ageGateLiquid.indexOf('backgroundUrl = "');
      const afterBackgroundUrlVariablePos = ageGateLiquid.indexOf('" %}<!-- backgroundUrl -->');
      let backgroundVariable = ageGateLiquid.slice(backgroundUrlVariablePos+17, afterBackgroundUrlVariablePos);

      const logoUrlVariablePos = ageGateLiquid.indexOf('assign logoUrl = "');
      const afterLogoUrlVariablePos = ageGateLiquid.indexOf('" %}<!-- logoUrl -->');
      let logoVariable = ageGateLiquid.slice(logoUrlVariablePos+18, afterLogoUrlVariablePos);

      const headingVariablePos = ageGateLiquid.indexOf('capture adult_header %}');
      const afterHeadingVariablePos = ageGateLiquid.indexOf('{% endcapture %}<!-- adult_header -->');
      let headingVariable = ageGateLiquid.slice(headingVariablePos+23, afterHeadingVariablePos);

      const subheaderVariablePos = ageGateLiquid.indexOf('capture adult_text %}');
      const afterSubheaderVariablePos = ageGateLiquid.indexOf('{% endcapture %}<!-- adult_text -->');
      let subheaderVariable = ageGateLiquid.slice(subheaderVariablePos+21, afterSubheaderVariablePos);

      const enterButtonTextPos = ageGateLiquid.indexOf('assign enterButtonText = "');
      const afterEnterButtonTextPos = ageGateLiquid.indexOf(' %}<!-- enterButtonText -->');
      let enterButtonText = ageGateLiquid.slice(enterButtonTextPos+26, afterEnterButtonTextPos);

      const exitButtonVariablePos = ageGateLiquid.indexOf('assign exitButton = ');
      const afterExitButtonVariablePos = ageGateLiquid.indexOf(' %}<!-- exitButton -->');
      let exitVariable = ageGateLiquid.slice(exitButtonVariablePos+20, afterExitButtonVariablePos);

      // const exitButtonColorVariablePos = addExit.indexOf('assign exitButtonColor = "hsl(');
      // const afterExitButtonColorVariablePos = addExit.indexOf(')" %}<!-- exitButtonColor -->');
      // const exitButtonColorHSL = ctx.request.body.exitButtonColor.hue + ', ' + (ctx.request.body.exitButtonColor.brightness*100) + '%, ' + (ctx.request.body.exitButtonColor.saturation*100) + '%';
      // let newAgeGateLiquid = addExit.slice(0,exitButtonColorVariablePos+30) + exitButtonColorHSL + addExit.slice(afterExitButtonColorVariablePos);
      
      // return newAgeGateLiquid;
      return { 
        'age': ageVariable,
        'rememberDays': rememberVariable,
        'requireDOB': dobVariable,
        'backgroundUrl': backgroundVariable,
        'logoUrl': logoVariable,
        'redirectUrl': redirectVariable,
        'headerText': headingVariable,
        'subheaderText': subheaderVariable,
        'enterButtonText': enterButtonText,
        'exitButton': exitVariable,
      };
    })
    .catch((error) => console.log('error', error));

  ctx.body = ageGateVariables;
  ctx.cookies.set('ageGateVariables', JSON.stringify(ageGateVariables), { httpOnly: false });
  ctx.status = 200;
  
  console.log(ctx.response);

  await next();
  
}

async function updateAgeGate (ctx, next) {
  console.log('UPDATING AGE GATE: \n', ctx.request.body);
  //get the active theme ID for api calls
  const themeApiUrl = `admin/api/${API_VERSION}/themes.json`;
  const options = {
    credentials: 'include',
    headers: {
      'X-Shopify-Access-Token': ctx.session.accessToken,
      'Content-Type': 'application/json',
    },
  };
  const optionsWithGet = { ...options, method: 'GET' };
  let activeThemeId = await fetch(`https://${ctx.session.shop}/${themeApiUrl}`, optionsWithGet)
      .then((response) => response.json())
      // getting active theme ID
      .then((myJson) => {
        for (var i = 0; i < myJson.themes.length; i++) {
          if(myJson.themes[i].role == 'main') {
            return myJson.themes[i].id;
          }
        }
      })
      .catch((error) => console.log('error', error));
  console.log('ACTIVE THEME ID: ', activeThemeId);

  //add new variables to age-gate.liquid
  let updatedAgeGateLiquid = await fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json?asset[key]=snippets/age-gate.liquid`, optionsWithGet )
    .then((response) => response.json())
    .then((themeAsset) => {
      console.log('returned: ', themeAsset.asset.key);
      return themeAsset.asset.value;
    })
    .then((ageGateLiquid) => {

      const ageVariablePos = ageGateLiquid.indexOf('assign age = ');
      const afterAgeVariablePos = ageGateLiquid.indexOf(' %}<!-- age variable -->');
      let addAge = ageGateLiquid.slice(0,ageVariablePos+13) + ctx.request.body.age + ageGateLiquid.slice(afterAgeVariablePos);

      const rememberDaysVariablePos = addAge.indexOf('assign rememberDays = ');
      const afterRememberDaysVariablePos = addAge.indexOf(' %}<!-- rememberDays -->');
      let addRemember = addAge.slice(0,rememberDaysVariablePos+22) + ctx.request.body.rememberDays + addAge.slice(afterRememberDaysVariablePos);
      
      const dobVariablePos = addRemember.indexOf('enter_date_of_birth = ');
      const afterDOBVariablePos = addRemember.indexOf(' %}<!-- enter_date_of_birth -->');
      let addDOB = addRemember.slice(0,dobVariablePos+22) + ctx.request.body.requireDOB + addRemember.slice(afterDOBVariablePos);

      const redirectUrlVariablePos = addDOB.indexOf('redirectUrl = "');
      const afterRedirectUrlVariablePos = addDOB.indexOf('" %}<!-- redirectUrl -->');
      let addRedirect = addDOB.slice(0,redirectUrlVariablePos+15) + ctx.request.body.redirectUrl + addDOB.slice(afterRedirectUrlVariablePos);

      const backgroundUrlVariablePos = addRedirect.indexOf('backgroundUrl = "');
      const afterBackgroundUrlVariablePos = addRedirect.indexOf('" %}<!-- backgroundUrl -->');
      let addBackground = addRedirect.slice(0,backgroundUrlVariablePos+17) + ctx.request.body.backgroundUrl + addRedirect.slice(afterBackgroundUrlVariablePos);

      const logoUrlVariablePos = addBackground.indexOf('assign logoUrl = "');
      const afterLogoUrlVariablePos = addBackground.indexOf('" %}<!-- logoUrl -->');
      let addLogo = addBackground.slice(0,logoUrlVariablePos+18) + ctx.request.body.logoUrl + addBackground.slice(afterLogoUrlVariablePos);

      const headingVariablePos = addLogo.indexOf('capture adult_header %}');
      const afterHeadingVariablePos = addLogo.indexOf('{% endcapture %}<!-- adult_header -->');
      let addHeading = addLogo.slice(0,headingVariablePos+23) + ctx.request.body.headerText + addLogo.slice(afterHeadingVariablePos);

      const subheaderVariablePos = addHeading.indexOf('capture adult_text %}');
      const afterSubheaderVariablePos = addHeading.indexOf('{% endcapture %}<!-- adult_text -->');
      let addSubheading = addHeading.slice(0,subheaderVariablePos+21) + ctx.request.body.subheaderText + addHeading.slice(afterSubheaderVariablePos);

      const exitButtonVariablePos = addSubheading.indexOf('assign exitButton = ');
      const afterExitButtonVariablePos = addSubheading.indexOf(' %}<!-- exitButton -->');
      let addExit = addSubheading.slice(0,exitButtonVariablePos+20) + ctx.request.body.exitButton + addSubheading.slice(afterExitButtonVariablePos);

      const exitButtonColorVariablePos = addExit.indexOf('assign exitButtonColor = "hsl(');
      const afterExitButtonColorVariablePos = addExit.indexOf(')" %}<!-- exitButtonColor -->');
      const exitButtonColorHSL = ctx.request.body.exitButtonColor.hue + ', ' + (ctx.request.body.exitButtonColor.brightness*100) + '%, ' + (ctx.request.body.exitButtonColor.saturation*100) + '%';
      let addExitColor = addExit.slice(0,exitButtonColorVariablePos+30) + exitButtonColorHSL + addExit.slice(afterExitButtonColorVariablePos);

      const enterButtonTextPos = addExitColor.indexOf('assign enterButtonText = "');
      const afterEnterButtonTextPos = addExitColor.indexOf(' %}<!-- enterButtonText -->');
      let addEnterText = addExitColor.slice(0,enterButtonTextPos+26) + ctx.request.body.enterButtonText + addExitColor.slice(afterEnterButtonTextPos);
      
      return addEnterText;
    })
    .catch((error) => console.log('error', error));
  console.log(updatedAgeGateLiquid);

  //update age gate liquid on the store
  const stringifiedAssetParams = JSON.stringify({
    asset: {
      key: "snippets/age-gate.liquid",
      value: updatedAgeGateLiquid
    }
  })
  const putOptions = {
    method: 'PUT',
    body: stringifiedAssetParams,
    credentials: 'include',
    headers: {
      'X-Shopify-Access-Token': ctx.session.accessToken,
      'Content-Type': 'application/json',
    },
  }  
  let themeUpdateResponse = await fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json`, putOptions )
    .then((response) => response.json())
    .catch((error) => console.log('error', error));

  console.log('updated: ', themeUpdateResponse.asset.key, ' at ', themeUpdateResponse.asset.updated_at);
  ctx.status = 201;
}

async function uninstallAgeGate (ctx, next) {
  console.log('UNINSTALLING AGE GATE: \n', ctx.request.body);
  //get the active theme ID for api calls
  const themeApiUrl = `admin/api/${API_VERSION}/themes.json`;
  const options = {
    credentials: 'include',
    headers: {
      'X-Shopify-Access-Token': ctx.session.accessToken,
      'Content-Type': 'application/json',
    },
  };
  const optionsWithGet = { ...options, method: 'GET' };
  let activeThemeId = await fetch(`https://${ctx.session.shop}/${themeApiUrl}`, optionsWithGet)
      .then((response) => response.json())
      // getting active theme ID
      .then((myJson) => {
        for (var i = 0; i < myJson.themes.length; i++) {
          if(myJson.themes[i].role == 'main') {
            return myJson.themes[i].id;
          }
        }
      })
      .catch((error) => console.log('error', error));
  console.log('ACTIVE THEME ID: ', activeThemeId);

  // DELETE age gate snippet
  const stringifiedAssetParams = JSON.stringify({
    asset: {
      key: "snippets/age-gate.liquid",
    }
  })
  const deleteOptions = {
    method: 'DELETE',
    body: stringifiedAssetParams,
    credentials: 'include',
    headers: {
      'X-Shopify-Access-Token': ctx.session.accessToken,
      'Content-Type': 'application/json',
    },
  }
  console.log(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json`, deleteOptions);
  fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json`, deleteOptions )
    .then((response) => response.json())
    .then((myJson) => {
      console.log('deleted', myJson);
    })
    .catch((error) => console.log('error', error));

  // remove snippet include from theme.liquid
  let updatedTheme = await fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json?asset[key]=layout/theme.liquid`, optionsWithGet )
    .then((response) => response.json())
    .then((themeAsset) => {
      console.log('returned: ', themeAsset.asset.key);
      return themeAsset.asset.value;
    })
    .then((themeLiquid) => {
      const hasAgeGate = themeLiquid.indexOf("{% include 'age-gate' %}");
      if(hasAgeGate !== -1){
        const newTheme = themeLiquid.slice(0,hasAgeGate) + themeLiquid.slice(hasAgeGate+24);
        return(newTheme);
      } else {
        console.log('age gate already removed');
        const newTheme = 'noUpdate';  
        return(newTheme);
      }
    })
    .catch((error) => console.log('error', error));
  
  if(updatedTheme != 'noUpdate'){
    const stringifiedAssetParams = JSON.stringify({
      asset: {
        key: "layout/theme.liquid",
        value: updatedTheme
      }
    })
    const putOptions = {
      method: 'PUT',
      body: stringifiedAssetParams,
      credentials: 'include',
      headers: {
        'X-Shopify-Access-Token': ctx.session.accessToken,
        'Content-Type': 'application/json',
      },
    }
    fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json`, putOptions )
      .then((response) => response.json())
      .then((themeUpdateResponse) => {
        console.log('updated: ', themeUpdateResponse.asset.key, ' at ', themeUpdateResponse.asset.updated_at);
      })
  }

  // DELETE api access, uninstall app
  const tokenApiUrl = `admin/api_permissions/current.json`;
  const deleteApiOptions = {
    credentials: 'include',
    headers: {
      'X-Shopify-Access-Token': ctx.session.accessToken,
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  };
  const optionsWithDelete = { ...deleteApiOptions, method: 'DELETE' };
  let storefrontAccesToken = await fetch(`https://${ctx.session.shop}/${tokenApiUrl}`, optionsWithDelete)
      .then((response) => {
        console.log(response);
        ctx.status = response.status;
      })
      .catch((error) => console.log('error', error));
  ctx.redirect(`https://${ctx.session.shop}/`);
}

module.exports = { installAgeGate, checkVariables, updateAgeGate, uninstallAgeGate };