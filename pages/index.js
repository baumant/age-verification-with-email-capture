import React from 'react';
import {
  Layout,
  Page,
  TextField,
  Stack,
  Toast,
  Banner,
  Button,
  SettingToggle,
  TextStyle,
  PageActions,
  InlineError,
  Thumbnail,
  Card,
  Heading,
  Subheading,
  ColorPicker,
  rgbToHsb,
  hsbToRgb,
  Select
} from '@shopify/polaris';
import Cookies from 'js-cookie';

class Index extends React.Component {
  state = {
    age: 21,
    rememberDays: 14,
    requireDOB: false,
    backgroundUrl: 'none',
    transparentModal: false,
    logoUrl: 'none',
    redirectUrl: 'http://google.com',
    headerText: 'You must be {{age}}+ to enter this site',
    subheaderText: 'This website contains adult material and is only suitable for those {{age}} years or older. Click Enter only if you are at least {{age}} years of age.',
    enterButtonText: 'ENTER',
    exitButtonText: 'EXIT',
    exitButton: true,
    isEmailCapture: true,
    ecTitle: 'STAY UP TO DATE',
    ecText: 'Submit your email to get updates on Island products and special promotions.',
    ecTextColor: {
      hue: 0,
      brightness: 1,
      saturation: 0,
    },
    ecTextColorRgb: 'rgb(255, 255, 255)',
    ecTitleColor: {
      hue: 0,
      brightness: 1,
      saturation: 0,
    },
    ecTitleColorRgb: 'rgb(255, 255, 255)',
    showToast: false,
    showError: false,
    errorMessage: '',
    designMode: true,
    backgroundOverlay: false,
    backgroundOverlayDark: true,
    modalPosition: 'center',
    dontShow: true
  };

  componentDidMount() {
    let cooks = Cookies.get();
    let currentVariables;
    
    // check variables in 'age-verification-with-email-capture'
    fetch('/checkVariables', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET'
    })
      .then(response => {
        // response.json()
        cooks = Cookies.get();
        currentVariables = JSON.parse(cooks.ageVerificationVariables);
        console.log('checkVariables response:', response, currentVariables);
        
        // map current variables to state
        Object.keys(currentVariables).map(i => {
          this.setState({ [i]: currentVariables[i]});
        });

        // set colorpicker state from current variable rgb color
        function rgbToObject(color) {
          const colorMatch = color.match(/\(([^)]+)\)/);

          if (!colorMatch) {
            return {red: 0, green: 0, blue: 0, alpha: 0};
          }

          const [red, green, blue, alpha] = colorMatch[1].split(',');
          const objColor = {
            red: parseInt(red, 10),
            green: parseInt(green, 10),
            blue: parseInt(blue, 10),
            alpha: parseInt(alpha, 10) || 1,
          };
          return objColor;
        }
        // for ecTextColor
        let rgbObject = rgbToObject(currentVariables['ecTextColorRgb']);
        let hsbFromRgb = rgbToHsb(rgbObject);
        this.state['ecTextColor'] = hsbFromRgb;

        // for ecTitleColor
        let ecTitleRGBObject = rgbToObject(currentVariables['ecTitleColorRgb']);
        let ecTitleHSBFromRgb = rgbToHsb(ecTitleRGBObject);
        this.state['ecTitleColor'] = ecTitleHSBFromRgb;        
      })
      .catch(function(error) {
        console.log('error: ', error);
        // Perform action based on error

      });
  }

  #handleChange = (field) => {
    if(field === 'ecTextColor'){
      const {hue, saturation, brightness} = this.state[field];
      const {red, green, blue} = hsbToRgb({hue, saturation, brightness});
      const colorString = `rgb(${red}, ${green}, ${blue})`;
      this.state['ecTextColorRgb'] = colorString;
    }
    if(field === 'ecTitleColor'){
      const {hue, saturation, brightness} = this.state[field];
      const {red, green, blue} = hsbToRgb({hue, saturation, brightness});
      const colorString = `rgb(${red}, ${green}, ${blue})`;
      this.state['ecTitleColorRgb'] = colorString;
    }
    return (value) => this.setState({[field]: value});
  };

  #handleSwitch = (field) => {
    return (value) => this.setState({[field]: !this.state[field]});
  };

  #exampleBackground = (url) => {
    this.setState({backgroundUrl: url});
  };

  #isInvalid = (value, pattern, comingFrom) => {
    if (!value) {
      return true;
    } else if ((value === 'none' && comingFrom === 'backgroundUrl') || (value === 'none' && comingFrom === 'logoUrl')) {
      return false;
    } else {
      return !new RegExp(pattern).test(value);
    }
  };

  #updateAgeVerification = () => {
    fetch('/updateAgeVerification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then((response) => {
      console.log('response: ', response);
      // Perform action based on response
      if (response.status === 201) {
        this.setState({showToast: true});
        Cookies.set('ageVerificationVariables', JSON.stringify(this.state));
      }
      else {
        this.setState({errorMessage: response.status + ", " + response.statusText, showError: true});
      }
    })
      .catch(function(error) {
        console.log('error: ', error);
        // Perform action based on error
        this.setState({errorMessage: error, showError: true});
      });
    console.log('submission', this.state);
  };

  #uninstallAgeVerification = () => {
    fetch('/uninstallAgeVerification', {
      method: 'POST',
      body: JSON.stringify(Cookies.get('shopOrigin')),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert('Successfully uninstalled Age Verification with Email Capture');
      }
      else {
        this.setState({errorMessage: response.status + ", " + response.statusText, showError: true});
      }
    })
  };

  render() {
    const {
      age,
      rememberDays,
      requireDOB,
      backgroundUrl,
      transparentModal,
      logoUrl,
      redirectUrl,
      headerText,
      subheaderText,
      enterButtonText,
      exitButtonText,
      exitButton,
      isEmailCapture,
      ecTitle,
      ecText,
      ecTextColor,
      ecTextColorRgb,
      ecTitleColor,
      ecTitleColorRgb,
      showToast,
      showError,
      errorMessage,
      designMode,
      backgroundOverlay,
      backgroundOverlayDark,
      modalPosition,
      dontShow
    } = this.state;

    const shopOrigin = Cookies.get('shopOrigin');

    const modalBackgroundStatus = transparentModal ? 'Add Background' : 'Remove Background';
    const modalBackgroundTextStatus = transparentModal ? 'does not' : 'does';

    const dobStatus = requireDOB ? 'Disable' : 'Enable';
    const dobTextStatus = requireDOB ? 'enabled' : 'disabled';

    const dontShowStatus = dontShow ? 'Enable' : 'Disable';
    const dontShowTextStatus = dontShow ? 'disabled' : 'enabled';
    
    const exitButtonStatus = exitButton ? 'Disable' : 'Enable';
    const exitButtonTextStatus = exitButton ? 'a button' : 'text';

    const emailcaptureStatus = isEmailCapture ? 'Disable' : 'Enable';
    const emailcaptureTextStatus = isEmailCapture ? 'enabled' : 'disabled';

    const overlayStatus = backgroundOverlay ? 'Remove overlay' : 'Add overlay';
    const overlayTextStatus = backgroundOverlay ? 'does' : 'does not';

    const overlayColorStatus = backgroundOverlayDark ? 'Use light overlay' : 'Use dark overlay';
    const overlayColorTextStatus = backgroundOverlayDark ? 'dark' : 'light';

    const urlFieldPattern = "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$";

    const toastMarkup = showToast ? (
      <Toast
        content="Sucessfully updated"
        onDismiss={() => this.setState({showToast: false})}
      />
    ) : null;

    const errorMarkup = showError ? (
      <Banner
        title="Error"
        status="Critical"
        onDismiss={() => this.setState({showError: false, errorMessage: ''})}
      >
        <p>{errorMessage}</p>
      </Banner>
    ) : null;

    const designmodeMarkup = designMode ? (
      <Banner
        title="You are in Design Mode, your browser wont remember you so when you refresh the page Age Verification with Email Capture will be visible again."
        status="warning"
        action={{
          content: 'Turn Design Mode off',
          onAction: this.#handleSwitch('designMode')
        }}
      ></Banner>
    ) : null;

    const designSectionDescription = designMode ? (
      <p>Customize the design of the age verification. <br/>
      <Button plain destructive
        onClick={this.#handleSwitch('designMode')}
      >
        Turn off Design Mode
      </Button>
      </p>
    ) : (
      <p>Customize the design of the age verification. <br/>
      <Button plain
        onClick={this.#handleSwitch('designMode')}
      >
        Turn on Design Mode
      </Button>
      </p>
    )

    const modalPositionOptions = [
      {label: 'Center', value: 'center'},
      {label: 'Left', value: 'left'},
      {label: 'Right', value: 'right'},
    ];

    return (
      <Page>
        <Layout>
          {toastMarkup}
          {designmodeMarkup}
          <Layout.AnnotatedSection
            title="Enable Age Verify with Email Capture"
            description="You must enable the app before it will show up on your site"
          >
            <SettingToggle
              action={{
                content: dontShowStatus,
                onAction: this.#handleSwitch('dontShow'),
              }}
              enabled={dontShow}
            >
              Age Verification with Email Capture is <TextStyle variation="strong">{dontShowTextStatus}</TextStyle>.
            </SettingToggle>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Age Restriction"
            description="The age required to enter."
          >
            <TextField
              value={age}
              onChange={this.#handleChange('age')}
              type="number"
              suffix="years"
            />
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Remember Visitor"
            description="Number of days to remember the visitor's answer."
          >
            <TextField
              value={rememberDays}
              onChange={this.#handleChange('rememberDays')}
              type="number"
              suffix="days"
            />
            { designMode && 
              <Layout>
                <Layout.Section>
                  <div><TextStyle variation="strong">This will not take effect until Design Mode is turned off</TextStyle></div>
                  <Button plain destructive
                    onClick={this.#handleSwitch('designMode')}
                  >
                    Turn off Design Mode
                  </Button>
                </Layout.Section>
              </Layout>
            }
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Require Date of Birth"
            description="This requires the user to enter their date of birth to confirm their age."
          >
            <SettingToggle
              action={{
                content: dobStatus,
                onAction: this.#handleSwitch('requireDOB'),
              }}
              enabled={requireDOB}
            >
              This setting is <TextStyle variation="strong">{dobTextStatus}</TextStyle>.
            </SettingToggle>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Redirect url"
            description="This is the url that the app will redirect users to who are under the required age."
          >
            <TextField
              value={redirectUrl}
              onChange={this.#handleChange('redirectUrl')}
              pattern={urlFieldPattern}
              type="url"
              error={this.#isInvalid(redirectUrl, urlFieldPattern, 'redirectUrl')}
              prefix="url:"
            />
            <InlineError
              message={
                (this.#isInvalid(redirectUrl, urlFieldPattern, 'redirectUrl')) ? "Invalid url. Make sure to include http:// or https://" : ""
              }
              fieldID="redirectUrl"
            />
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Design"
            description={designSectionDescription}
          >
             
            <Card sectioned>
              <Heading>Background Image</Heading>
              <TextField
                label="Display an image in the background. Leave as 'none' for the default grey background."
                value={backgroundUrl}
                onChange={this.#handleChange('backgroundUrl')}
                pattern={urlFieldPattern}
                type="url"
                error={this.#isInvalid(backgroundUrl, urlFieldPattern, 'backgroundUrl')}
                prefix="image url:"
              />
              <div className="Polaris-Labelled__HelpText">You can upload images in <a target="_parent" href={"https://" + shopOrigin + "/admin/settings/files"}>Settings > Files</a></div>
              <InlineError
                message={
                  (this.#isInvalid(backgroundUrl, urlFieldPattern, 'backgroundUrl')) ? "Invalid url. Make sure to include http:// or https://" : ""
                }
                fieldID="backgroundUrl"
              />
              { (backgroundUrl !== 'none' && !this.#isInvalid(backgroundUrl, urlFieldPattern, 'backgroundUrl')) &&
                <Thumbnail
                  source={backgroundUrl}
                  size="large"
                  alt="background image"
                />
              }
              <Layout.Section>
                <Subheading>Examples:</Subheading>
                <Stack>
                  <div
                    style={{cursor: "pointer"}}
                    onClick={() => this.#exampleBackground("https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80")}
                    onKeyDown={() => this.#exampleBackground("https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80")}
                  >
                    <Thumbnail
                      source="https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80"
                      size="large"
                      alt="background image"
                    />
                  </div>

                  <div
                    style={{cursor: "pointer"}}
                    onClick={() => this.#exampleBackground("https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}
                    onKeyDown={() => this.#exampleBackground("https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}
                  >
                    <Thumbnail
                      source="https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                      size="large"
                      alt="background image"
                    />
                  </div>
                  <div
                    style={{cursor: "pointer"}}
                    onClick={() => this.#exampleBackground("https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}
                    onKeyDown={() => this.#exampleBackground("https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}
                  >
                    <Thumbnail
                      source="https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                      size="large"
                      alt="background image"
                    />
                  </div>
                  <div
                    style={{cursor: "pointer"}}
                    onClick={() => this.#exampleBackground("https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}
                    onKeyDown={() => this.#exampleBackground("https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}
                  >
                    <Thumbnail
                      source="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                      size="large"
                      alt="background image"
                    />
                  </div>
                </Stack>
              </Layout.Section>
              <Layout.Section>
                <Subheading>Background Overlay</Subheading>
                <SettingToggle
                  action={{
                    content: overlayStatus,
                    onAction: this.#handleSwitch('backgroundOverlay'),
                  }}
                  enabled={backgroundOverlay}
                >
                  The background image <TextStyle variation="strong">{overlayTextStatus}</TextStyle> have an overlay.
                </SettingToggle>
                { backgroundOverlay && 
                  <SettingToggle
                    action={{
                      content: overlayColorStatus,
                      onAction: this.#handleSwitch('backgroundOverlayDark'),
                    }}
                    enabled={backgroundOverlayDark}
                  >
                    You're using a <TextStyle variation="strong">{overlayColorTextStatus}</TextStyle> overlay on the background image.
                  </SettingToggle>
                }
              </Layout.Section>
            </Card>

            <Card sectioned>
              <Heading>Modal</Heading>
              <br/>
              
              <Subheading>Modal Background</Subheading>
              <SettingToggle
                action={{
                  content: modalBackgroundStatus,
                  onAction: this.#handleSwitch('transparentModal'),
                }}
                enabled={transparentModal}
              >
                The modal popup <TextStyle variation="strong">{modalBackgroundTextStatus}</TextStyle> have a background.
              </SettingToggle>
              <br/>
              
              <Subheading>Modal Position</Subheading>
              <Select
                label="Modal Position"
                options={modalPositionOptions}
                onChange={this.#handleChange('modalPosition')}
                value={this.state.modalPosition}
              />
            </Card>
            
            <Card sectioned>
              <Heading>Logo</Heading>
              <TextField
                label="Display your logo as part of the overlay. Leave as 'none' for no logo."
                value={logoUrl}
                onChange={this.#handleChange('logoUrl')}
                pattern={urlFieldPattern}
                type="url"
                error={this.#isInvalid(logoUrl, urlFieldPattern, 'logoUrl')}
                prefix="image url:"
              />
              <div className="Polaris-Labelled__HelpText">You can upload images in <a target="_parent" href={"https://" + shopOrigin + "/admin/settings/files"}>Settings > Files</a></div>
              <InlineError
                message={
                  (this.#isInvalid(logoUrl, urlFieldPattern, 'logoUrl')) ? "Invalid url. Make sure to include http:// or https://" : ""
                }
                fieldID="logoUrl"
              />
              { (logoUrl !== 'none' && !this.#isInvalid(logoUrl, urlFieldPattern, 'logoUrl')) &&
                <Thumbnail
                  source={logoUrl}
                  size="large"
                  alt="logo image"
                />
              }
            </Card>

            <Card sectioned>
              <Heading>Header Text</Heading>
              <TextField
                value={headerText}
                onChange={this.#handleChange('headerText')}
                type="text"
                helpText="You can use the variable {{age}} to include your set age requirement."
              />
            </Card>

            <Card sectioned>
              <Heading>Subheader Text</Heading>
              <TextField
                value={subheaderText}
                onChange={this.#handleChange('subheaderText')}
                type="text"
                helpText="You can use the variable {{age}} to include your set age requirement."
                multiline="true"
              />
            </Card>

            <Card sectioned>
              <Heading>Buttons</Heading>
              
              <p>Enter Button Text:</p>
              <TextField
                value={enterButtonText}
                onChange={this.#handleChange('enterButtonText')}
                type="text"
              />
              <br />

              <p>Exit Button Text:</p>
              <TextField
                value={exitButtonText}
                onChange={this.#handleChange('exitButtonText')}
                type="text"
                multiline="false"
              />
              <br />

              <SettingToggle
                action={{
                  content: exitButtonStatus,
                  onAction: this.#handleSwitch('exitButton'),
                }}
                enabled={exitButton}
              >
                The exit link is displayed as <TextStyle variation="strong">{exitButtonTextStatus}</TextStyle> 
              </SettingToggle>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Email Capture"
            description="This will ask the user to sign up for your email list after confirming their age."
          >
            <SettingToggle
              action={{
                content: emailcaptureStatus,
                onAction: this.#handleSwitch('isEmailCapture'),
              }}
              enabled={isEmailCapture}
            >
              Email capture is <TextStyle variation="strong">{emailcaptureTextStatus}</TextStyle>.
            </SettingToggle>

            { isEmailCapture &&
              <Layout>
                <Layout.Section>
                  <Card sectioned>
                    <Heading>Email Capture section title text</Heading>
                    <TextField
                      value={ecTitle}
                      onChange={this.#handleChange('ecTitle')}
                      type="text"
                      helpText="Leave blank for no title"
                    />
                    { ecTitle.length > 0 &&
                      <Layout>
                        <Layout.Section>
                          <Subheading>Title Text Color</Subheading>
                          <ColorPicker onChange={this.#handleChange('ecTitleColor')} color={ecTitleColor} />
                        </Layout.Section>
                      </Layout> 
                    }
                  </Card>
                  <Card sectioned>
                    <Heading>Email Capture section subtitle text</Heading>
                    <TextField
                      value={ecText}
                      onChange={this.#handleChange('ecText')}
                      type="text"
                      helpText="Leave blank for no subtitle"
                    />
                    { ecText.length > 0 &&
                      <Layout>
                        <Layout.Section>
                          <Subheading>Subtitle Text Color</Subheading>
                          <ColorPicker onChange={this.#handleChange('ecTextColor')} color={ecTextColor} />
                        </Layout.Section>
                      </Layout> 
                    }
                  </Card>
                </Layout.Section>
              </Layout>
            }
          </Layout.AnnotatedSection>

        </Layout>
        {errorMarkup}
        <PageActions
          primaryAction={[
            {
              content: 'Save Settings',
              onAction: () => {
                this.#updateAgeVerification();
              },
            },
          ]}
          secondaryActions={[
            {
              content: 'Uninstall Age Verification with Email Capture',
              onAction: () => {
                console.log('uninstall age verification action');
                this.#uninstallAgeVerification();
              },
            },
          ]}
        />
      </Page>
    );
  }
}

export default Index;
