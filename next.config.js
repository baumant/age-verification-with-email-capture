const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);
module.exports = withCSS(
  {
    webpack: (config) => {
      const env = { API_KEY: apiKey };

      config.plugins.push(new webpack.DefinePlugin(env));
      return config;
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? 'http://thirsty-saha-a4f06b.netlify.com' : '',
  }
)