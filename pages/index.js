import React from 'react';
import {
  Layout,
  Page,
  TextField,
  Stack,
  Toast,
  Banner,
  SettingToggle,
  TextStyle,
  PageActions,
  InlineError,
  Thumbnail,
  Card,
  Heading,
  Subheading,
  ColorPicker,
} from '@shopify/polaris';
import Cookies from 'js-cookie';

class Index extends React.Component {
  state = {
    age: 21,
    rememberDays: 14,
    requireDOB: false,
    backgroundUrl: 'none',
    logoUrl: 'none',
    redirectUrl: 'http://google.com',
    headerText: 'You must be {{age}}+ to enter this site',
    subheaderText: 'This website contains adult material and is only suitable for those {{age}} years or older. Click Enter only if you are at least {{age}} years of age.',
    enterButtonText: 'ENTER',
    exitButtonText: 'EXIT',
    exitButton: true,
    exitButtonColor: {
      hue: 0,
      brightness: .9,
      saturation: .6,
    },
    showToast: false,
    showError: false,
    errorMessage: '',
  };

  componentDidMount() {
    let cooks = Cookies.get();
    let currentVariables;
    if(cooks.ageGateVariables){
      console.log('variables in cookies');
      currentVariables = JSON.parse(cooks.ageGateVariables);
      Object.keys(currentVariables).map(i => {
        this.setState({ [i]: currentVariables[i]});
      })
      console.log(this.state);
    }
    else {
      fetch('/checkVariables', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET'
      })
        .then(response => {
          // response.json()
          cooks = Cookies.get();
          currentVariables = JSON.parse(cooks.ageGateVariables);
          console.log('checkVariables response:', response, currentVariables);
          Object.keys(currentVariables).map(i => {
            this.setState({ [i]: currentVariables[i]});
          })
        })
        .catch(function(error) {
          console.log('error: ', error);
          // Perform action based on error
          
        });
    }
  }

  #handleChange = (field) => {
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

  #updateAgeGate = () => {
    fetch('/updateAgeGate', {
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
        Cookies.set('ageGateVariables', JSON.stringify(this.state));
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

  #uninstallAgeGate = () => {
    fetch('/uninstallAgeGate', {
      method: 'POST',
      body: JSON.stringify(Cookies.get('shopOrigin')),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert('Successfully uninstalled Age Gate');
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
      logoUrl,
      redirectUrl,
      headerText,
      subheaderText,
      enterButtonText,
      exitButtonText,
      exitButton,
      exitButtonColor,
      showToast,
      showError,
      errorMessage,
    } = this.state;

    const shopOrigin = Cookies.get('shopOrigin');

    const dobStatus = requireDOB ? 'Disable' : 'Enable';
    const dobTextStatus = requireDOB ? 'enabled' : 'disabled';
    const exitButtonStatus = exitButton ? 'Disable' : 'Enable';
    const exitButtonTextStatus = exitButton ? 'a button' : 'text';

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

    return (
      <Page>
        <Layout>
          {toastMarkup}
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
            description="Customize the design of the age gate."
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
              <div className="Polaris-Labelled__HelpText">You can upload images in <a href={"https://" + shopOrigin + "/admin/settings/files"}>Settings > Files</a></div>
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
              <div className="Polaris-Labelled__HelpText">You can upload images in <a href={"https://" + shopOrigin + "/admin/settings/files"}>Settings > Files</a></div>
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

              { exitButton &&
                <div>
                  <Layout.Section>
                    <p>Exit Button Background Color:</p>
                    <ColorPicker onChange={this.#handleChange('exitButtonColor')} color={exitButtonColor} />
                  </Layout.Section>
                </div>
              }
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
        {errorMarkup}
        <PageActions
          primaryAction={[
            {
              content: 'Save Settings',
              onAction: () => {
                this.#updateAgeGate();
              },
            },
          ]}
          secondaryActions={[
            {
              content: 'Uninstall Age Gate',
              onAction: () => {
                console.log('uninstall age gate action');
                this.#uninstallAgeGate();
              },
            },
          ]}
        />
      </Page>
    );
  }
}

export default Index;
