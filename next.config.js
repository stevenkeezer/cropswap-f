const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");

const nextConfigs = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    config.plugins = [...config.plugins];
    return config;
  },
  target: "serverless",
};

module.exports = withPlugins([withCSS({})], nextConfigs);
