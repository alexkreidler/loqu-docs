module.exports = function (context, options) {
  console.log(context, options);
  return {
    name: "custom-docusaurus-svgr-loader-plugin",
    configureWebpack(config, isServer, utils) {
      console.log(config.module.rules[0].use);
      const { getCacheLoader } = utils;
      return {
        module: {
          rules: [
            {
              test: /\.svg$/,
              use: [getCacheLoader(isServer), "@svgr/webpack"],
            },
          ],
        },
      };
    },
  };
};
