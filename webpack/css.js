module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: oaths,
          use: [
            "style-loader",
            "css-loader"
          ]
        }
      ]
    }
  };
};