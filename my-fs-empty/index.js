module.exports = function (context, options) {
  return {
    name: "custom-docusaurus-plugin",
    configureWebpack(config, isServer, utils) {
      const { getCacheLoader } = utils;
      /** @type import("webpack").Configuration */
      const x = {
        node: {
          fs: "empty",
          module: "empty",
        },
      };
      return x;
    },
  };
};
