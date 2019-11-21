require('isomorphic-fetch');
const dotenv = require('dotenv');
dotenv.config();

const { API_VERSION } = process.env;

async function installAgeVerification (ctx, next) {
  
  console.log('INSTALLING AGE VERIFICATION: \n', ctx.session);
  
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
          const hasAgeVerification = themeLiquid.indexOf("{% include 'age-verification-with-email-capture' %}");
          const bodyPosition = themeLiquid.indexOf('</body>');
          if(hasAgeVerification == -1){
            const newTheme = themeLiquid.slice(0,bodyPosition) + "{% include 'age-verification-with-email-capture' %}" + themeLiquid.slice(bodyPosition);
            return newTheme;
          } else {
            console.log('age verification already exists');
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
      //adding age-verification-with-email-capture.liquid snippet
      const stringifiedAssetParams = JSON.stringify({
        asset: {
          key: "snippets/age-verification-with-email-capture.liquid",
          src: "https://raw.githubusercontent.com/baumant/age-verification-with-email-capture/master/age-verification-with-email-capture.liquid"
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

      const stringifiedScriptParams = JSON.stringify({
        script_tag: {
          event: "onload",
          display_scope: "online_store",
          src: "https://age-verify-with-email-capture.herokuapp.com/age-verification-with-email-capture.js"
        }
      })
      const scriptTagPostOptions = {
        method: 'POST',
        body: stringifiedScriptParams,
        credentials: 'include',
        headers: {
          'X-Shopify-Access-Token': ctx.session.accessToken,
          'Content-Type': 'application/json',
        },
      }
      fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/script_tags.json`, scriptTagPostOptions )
        .then((response) => {
          console.log('script response', response);
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

  let ageVerificationVariables = await fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json?asset[key]=snippets/age-verification-with-email-capture.liquid`, optionsWithGet )
    .then((response) => response.json())
    .then((themeAsset) => {
      console.log('returned: ', themeAsset.asset.key);
      return themeAsset.asset.value;
    })
    .then((ageVerificationLiquid) => {

      const ageVariablePos = ageVerificationLiquid.indexOf('assign age = ');
      const afterAgeVariablePos = ageVerificationLiquid.indexOf(' %}<!-- age variable -->');
      let ageVariable = ageVerificationLiquid.slice(ageVariablePos+13,afterAgeVariablePos);

      const rememberDaysVariablePos = ageVerificationLiquid.indexOf('assign rememberDays = ');
      const afterRememberDaysVariablePos = ageVerificationLiquid.indexOf(' %}<!-- rememberDays -->');
      let rememberVariable = ageVerificationLiquid.slice(rememberDaysVariablePos+22, afterRememberDaysVariablePos);
      
      const dobVariablePos = ageVerificationLiquid.indexOf('enter_date_of_birth = ');
      const afterDOBVariablePos = ageVerificationLiquid.indexOf(' %}<!-- enter_date_of_birth -->');
      let dobVariable = (ageVerificationLiquid.slice(dobVariablePos+22, afterDOBVariablePos) == 'true');

      const redirectUrlVariablePos = ageVerificationLiquid.indexOf('redirectUrl = "');
      const afterRedirectUrlVariablePos = ageVerificationLiquid.indexOf('" %}<!-- redirectUrl -->');
      let redirectVariable = ageVerificationLiquid.slice(redirectUrlVariablePos+15, afterRedirectUrlVariablePos);

      const backgroundUrlVariablePos = ageVerificationLiquid.indexOf('backgroundUrl = "');
      const afterBackgroundUrlVariablePos = ageVerificationLiquid.indexOf('" %}<!-- backgroundUrl -->');
      let backgroundVariable = ageVerificationLiquid.slice(backgroundUrlVariablePos+17, afterBackgroundUrlVariablePos);

      const transparentModalPos = ageVerificationLiquid.indexOf('assign transparentModal = ');
      const afterTransparentModalPos = ageVerificationLiquid.indexOf(' %}<!-- transparentModal -->');
      let transparentModalVariable = (ageVerificationLiquid.slice(transparentModalPos+26, afterTransparentModalPos) == 'true');

      const logoUrlVariablePos = ageVerificationLiquid.indexOf('assign logoUrl = "');
      const afterLogoUrlVariablePos = ageVerificationLiquid.indexOf('" %}<!-- logoUrl -->');
      let logoVariable = ageVerificationLiquid.slice(logoUrlVariablePos+18, afterLogoUrlVariablePos);

      const headingVariablePos = ageVerificationLiquid.indexOf('capture adult_header %}');
      const afterHeadingVariablePos = ageVerificationLiquid.indexOf('{% endcapture %}<!-- adult_header -->');
      let headingVariable = ageVerificationLiquid.slice(headingVariablePos+23, afterHeadingVariablePos);

      const subheaderVariablePos = ageVerificationLiquid.indexOf('capture adult_text %}');
      const afterSubheaderVariablePos = ageVerificationLiquid.indexOf('{% endcapture %}<!-- adult_text -->');
      let subheaderVariable = ageVerificationLiquid.slice(subheaderVariablePos+21, afterSubheaderVariablePos);

      const enterButtonTextPos = ageVerificationLiquid.indexOf('assign enterButtonText = "');
      const afterEnterButtonTextPos = ageVerificationLiquid.indexOf('" %}<!-- enterButtonText -->');
      let enterButtonText = ageVerificationLiquid.slice(enterButtonTextPos+26, afterEnterButtonTextPos);

      const exitButtonTextPos = ageVerificationLiquid.indexOf('assign exitButtonText = "');
      const afterExitButtonTextPos = ageVerificationLiquid.indexOf('" %}<!-- exitButtonText -->');
      let exitButtonText = ageVerificationLiquid.slice(exitButtonTextPos+25, afterExitButtonTextPos);

      const exitButtonVariablePos = ageVerificationLiquid.indexOf('assign exitButton = ');
      const afterExitButtonVariablePos = ageVerificationLiquid.indexOf(' %}<!-- exitButton -->');
      let exitVariable = (ageVerificationLiquid.slice(exitButtonVariablePos+20, afterExitButtonVariablePos) == 'true');

      const emailCaptureVariablePos = ageVerificationLiquid.indexOf('assign isEmailCapture = ');
      const afterEmailCaptureVariablePos = ageVerificationLiquid.indexOf(' %}<!-- isEmailCapture -->');
      let emailCaptureVariable = (ageVerificationLiquid.slice(emailCaptureVariablePos+24, afterEmailCaptureVariablePos) == 'true');

      const ecTitleVarPos = ageVerificationLiquid.indexOf('capture ec_title %}');
      const afterECTitleVarPos = ageVerificationLiquid.indexOf('{% endcapture %}<!-- ec_title -->');
      let ecTitleVariable = ageVerificationLiquid.slice(ecTitleVarPos+19, afterECTitleVarPos);

      const ecTitlecolorVarPos = ageVerificationLiquid.indexOf('assign ec_titlecolor = "');
      const afterECTitlecolorVarPos = ageVerificationLiquid.indexOf('" %}<!-- ec_titlecolor -->');
      let ecTitlecolorVariable = ageVerificationLiquid.slice(ecTitlecolorVarPos+24, afterECTitlecolorVarPos);

      const ecTextVarPos = ageVerificationLiquid.indexOf('capture ec_text %}');
      const afterECTextVarPos = ageVerificationLiquid.indexOf('{% endcapture %}<!-- ec_text -->');
      let ecTextVariable = ageVerificationLiquid.slice(ecTextVarPos+18, afterECTextVarPos);

      const ecTextcolorVarPos = ageVerificationLiquid.indexOf('assign ec_textcolor = "');
      const afterECTextcolorVarPos = ageVerificationLiquid.indexOf('" %}<!-- ec_textcolor -->');
      let ecTextcolorVariable = ageVerificationLiquid.slice(ecTextcolorVarPos+23, afterECTextcolorVarPos);

      const designModeVarPos = ageVerificationLiquid.indexOf('assign designMode = ');
      const afterDesignModeVarPos = ageVerificationLiquid.indexOf(' %}<!-- designMode -->');
      let designModeVariable = (ageVerificationLiquid.slice(designModeVarPos+20, afterDesignModeVarPos) == 'true');

      const overlayVarPos = ageVerificationLiquid.indexOf('assign backgroundOverlay = ');
      const afterOverlayVarPos = ageVerificationLiquid.indexOf(' %}<!-- backgroundOverlay -->');
      let overlayVariable = (ageVerificationLiquid.slice(overlayVarPos+27, afterOverlayVarPos) == 'true');

      const overlayDarkVarPos = ageVerificationLiquid.indexOf('assign backgroundOverlayDark = ');
      const afterOverlayDarkVarPos = ageVerificationLiquid.indexOf(' %}<!-- backgroundOverlayColor -->');
      let overlayDarkVariable = (ageVerificationLiquid.slice(overlayDarkVarPos+31, afterOverlayDarkVarPos) == 'true');

      const modalPositionVarPos = ageVerificationLiquid.indexOf('assign modalPosition = "');
      const afterModalPositionVarPos = ageVerificationLiquid.indexOf('" %}<!-- modalPosition -->');
      let modalPositionVariable = ageVerificationLiquid.slice(modalPositionVarPos+24, afterModalPositionVarPos);

      // return newAgeVerificationLiquid;
      return { 
        'age': ageVariable,
        'rememberDays': rememberVariable,
        'requireDOB': dobVariable,
        'backgroundUrl': backgroundVariable,
        'transparentModal': transparentModalVariable,
        'logoUrl': logoVariable,
        'redirectUrl': redirectVariable,
        'headerText': headingVariable,
        'subheaderText': subheaderVariable,
        'enterButtonText': enterButtonText,
        'exitButtonText': exitButtonText,
        'exitButton': exitVariable,
        'isEmailCapture': emailCaptureVariable,
        'ecTitle': ecTitleVariable,
        'ecTitleColorRgb': ecTitlecolorVariable,
        'ecText': ecTextVariable,
        'ecTextColorRgb': ecTextcolorVariable,
        'designMode': designModeVariable,
        'backgroundOverlay': overlayVariable,
        'backgroundOverlayDark': overlayDarkVariable,
        'modalPosition': modalPositionVariable
      };
    })
    .catch((error) => console.log('error', error));

  ctx.body = ageVerificationVariables;
  ctx.cookies.set('ageVerificationVariables', JSON.stringify(ageVerificationVariables), { httpOnly: false });
  ctx.status = 200;
  
  console.log(ctx.response);

  await next();
  
}

async function updateAgeVerification (ctx, next) {
  console.log('UPDATING AGE VERIFICATION: \n', ctx.request.body);
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

  //add new variables to age-verification-with-email-capture.liquid
  let updatedAgeVerificationLiquid = await fetch(`https://${ctx.session.shop}/admin/api/${API_VERSION}/themes/${activeThemeId}/assets.json?asset[key]=snippets/age-verification-with-email-capture.liquid`, optionsWithGet )
    .then((response) => response.json())
    .then((themeAsset) => {
      console.log('returned: ', themeAsset.asset.key);
      return themeAsset.asset.value;
    })
    .then((ageVerificationLiquid) => {

      const ageVariablePos = ageVerificationLiquid.indexOf('assign age = ');
      const afterAgeVariablePos = ageVerificationLiquid.indexOf(' %}<!-- age variable -->');
      let addAge = ageVerificationLiquid.slice(0,ageVariablePos+13) + ctx.request.body.age + ageVerificationLiquid.slice(afterAgeVariablePos);

      const rememberDaysVariablePos = addAge.indexOf('assign rememberDays = ');
      const afterRememberDaysVariablePos = addAge.indexOf(' %}<!-- rememberDays -->');
      let addRemember = addAge.slice(0,rememberDaysVariablePos+22) + ctx.request.body.rememberDays + addAge.slice(afterRememberDaysVariablePos);
      
      const dobVariablePos = addRemember.indexOf('enter_date_of_birth = ');
      const afterDOBVariablePos = addRemember.indexOf(' %}<!-- enter_date_of_birth -->');
      let addDOB = addRemember.slice(0,dobVariablePos+22) + ctx.request.body.requireDOB.toString() + addRemember.slice(afterDOBVariablePos);

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

      const enterButtonTextPos = addExit.indexOf('assign enterButtonText = "');
      const afterEnterButtonTextPos = addExit.indexOf('" %}<!-- enterButtonText -->');
      let addEnterText = addExit.slice(0,enterButtonTextPos+26) + ctx.request.body.enterButtonText + addExit.slice(afterEnterButtonTextPos);

      const exitButtonTextPos = addEnterText.indexOf('assign exitButtonText = "');
      const afterExitButtonTextPos = addEnterText.indexOf('" %}<!-- exitButtonText -->');
      let addExitText = addEnterText.slice(0,exitButtonTextPos+25) + ctx.request.body.exitButtonText + addEnterText.slice(afterExitButtonTextPos);

      const transparentModalPos = addExitText.indexOf('assign transparentModal = ');
      const afterTransparentModalPos = addExitText.indexOf(' %}<!-- transparentModal -->');
      let addTransparentModal = addExitText.slice(0,transparentModalPos+26) + ctx.request.body.transparentModal.toString() + addExitText.slice(afterTransparentModalPos);

      const emailCapturePos = addTransparentModal.indexOf('assign isEmailCapture = ');
      const afterEmailCapturePos = addTransparentModal.indexOf(' %}<!-- isEmailCapture -->');
      let addEmailCapture = addTransparentModal.slice(0,emailCapturePos+24) + ctx.request.body.isEmailCapture.toString() + addTransparentModal.slice(afterEmailCapturePos);

      const ecTitlePos = addEmailCapture.indexOf('capture ec_title %}');
      const afterECTitlePos = addEmailCapture.indexOf('{% endcapture %}<!-- ec_title -->');
      let addECTitle = addEmailCapture.slice(0,ecTitlePos+19) + ctx.request.body.ecTitle + addEmailCapture.slice(afterECTitlePos);

      const ecTextPos = addECTitle.indexOf('capture ec_text %}');
      const afterECTextPos = addECTitle.indexOf('{% endcapture %}<!-- ec_text -->');
      let addECText = addECTitle.slice(0,ecTextPos+18) + ctx.request.body.ecText + addECTitle.slice(afterECTextPos);

      const ecTextcolorPos = addECText.indexOf('assign ec_textcolor = "');
      const afterECTextcolorPos = addECText.indexOf('" %}<!-- ec_textcolor -->');
      let addECTextcolor = addECText.slice(0,ecTextcolorPos+23) + ctx.request.body.ecTextColorRgb + addECText.slice(afterECTextcolorPos);

      const designModePos = addECTextcolor.indexOf('assign designMode = ');
      const afterDesignModePos = addECTextcolor.indexOf(' %}<!-- designMode -->');
      let addDesignMode = addECTextcolor.slice(0,designModePos+20) + ctx.request.body.designMode.toString() + addECTextcolor.slice(afterDesignModePos);

      const ecTitlecolorPos = addDesignMode.indexOf('assign ec_titlecolor = "');
      const afterECTitlecolorPos = addDesignMode.indexOf('" %}<!-- ec_titlecolor -->');
      let addECTitlecolor = addDesignMode.slice(0,ecTitlecolorPos+24) + ctx.request.body.ecTitleColorRgb + addDesignMode.slice(afterECTitlecolorPos);

      const overlayPos = addECTitlecolor.indexOf('assign backgroundOverlay = ');
      const afterOverlayPos = addECTitlecolor.indexOf(' %}<!-- backgroundOverlay -->');
      let addOverlay = addECTitlecolor.slice(0,overlayPos+27) + ctx.request.body.backgroundOverlay.toString() + addECTitlecolor.slice(afterOverlayPos);

      const overlayDarkPos = addOverlay.indexOf('assign backgroundOverlayDark = ');
      const afterOverlayDarkPos = addOverlay.indexOf(' %}<!-- backgroundOverlayColor -->');
      let addOverlayDark = addOverlay.slice(0,overlayDarkPos+31) + ctx.request.body.backgroundOverlayDark.toString() + addOverlay.slice(afterOverlayDarkPos);

      const modalPosition = addOverlayDark.indexOf('assign modalPosition = "');
      const afterModalPosition = addOverlayDark.indexOf('" %}<!-- modalPosition -->');
      let addModalPosition = addOverlayDark.slice(0,modalPosition+24) + ctx.request.body.modalPosition + addOverlayDark.slice(afterModalPosition);

      return addModalPosition;
    })
    .catch((error) => console.log('error', error));
  console.log(updatedAgeVerificationLiquid);

  //update age verification liquid on the store
  const stringifiedAssetParams = JSON.stringify({
    asset: {
      key: "snippets/age-verification-with-email-capture.liquid",
      value: updatedAgeVerificationLiquid
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

async function uninstallAgeVerification (ctx, next) {
  console.log('UNINSTALLING AGE VERIFICATION: \n', ctx.request.body);
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

  // DELETE age verification snippet
  const stringifiedAssetParams = JSON.stringify({
    asset: {
      key: "snippets/age-verification-with-email-capture.liquid",
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
      const hasAgeVerification = themeLiquid.indexOf("{% include 'age-verification-with-email-capture' %}");
      if(hasAgeVerification !== -1){
        const newTheme = themeLiquid.slice(0,hasAgeVerification) + themeLiquid.slice(hasAgeVerification+24);
        return(newTheme);
      } else {
        console.log('age verification already removed');
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

module.exports = { installAgeVerification, checkVariables, updateAgeVerification, uninstallAgeVerification };