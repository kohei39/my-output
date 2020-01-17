module.exports = {
    devServer: {
      proxy: {
        "/hotpepper/": {
          target: "http://localhost:3100",
        }
      }
    }
  };