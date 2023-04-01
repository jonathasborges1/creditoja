const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@modules": path.resolve(__dirname, "src/modules/"),
      "@ioc": path.resolve(__dirname, "src/ioc/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "src/config"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  };

  return config;
};
