import App from 'next/app';
import Head from 'next/head';
import {Provider, Loading} from '@shopify/app-bridge-react';
import { 
  AppProvider,
  Spinner
} from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import Cookies from 'js-cookie';

class MyApp extends App {
  state = {
    shopOrigin: Cookies.get('shopOrigin'),
  }

  render() {
    const { Component, pageProps } = this.props;
    const config = {apiKey: API_KEY, shopOrigin: this.state.shopOrigin};

    if (this.state.shopOrigin == undefined) {
      return (
        <React.Fragment>
          <Head>
            <title>Age Verification with Email Capture</title>
            <meta charSet="utf-8" />
          </Head>
          <AppProvider>
            <Provider config={config}>
              <Loading />
              <Spinner accessibilityLabel="Spinner example" size="large" color="inkLightest" />
            </Provider>
          </AppProvider>
        </React.Fragment>
      )  
    } else {
      return (
        <React.Fragment>
          <Head>
            <title>Age Verification with Email Capture</title>
            <meta charSet="utf-8" />
          </Head>
          <AppProvider
            forceRedirect
          >
            <Provider config={config}>
              <Loading />
              <Component {...pageProps} />
            </Provider>
          </AppProvider>
        </React.Fragment>
      );
    }
  }
}

export default MyApp;