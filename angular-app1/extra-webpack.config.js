const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config, options) => {
  config.output = {
    ...config.output,
    uniqueName: "ngmfe1",
  };
  config.optimization = { ...config.optimization, runtimeChunk: false };
  config.plugins = [
    ...config.plugins,
    new ModuleFederationPlugin({
      shared: {
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^15.1.0",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^15.1.0",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^15.1.0",
        },
        "rxjs": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "~7.8.0",
        },
        "single-spa-angular": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^8.0.1",
        },
      },
      name: "ngmfe1",
      filename: "remoteEntry.js",
      exposes: {
        "./MFEModule1": "./src/main.single-spa.ts",
      },
    }),
  ];
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
