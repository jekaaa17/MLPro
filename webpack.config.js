const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
  },
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      //loader executes from bottom to top, so we put css loader at the end
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(jpg|png|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets",
            },
          },
          {
            test: /\.(?:css|ttf)$/i,
            use: [
              "style-loader",
              "css-loader?modules&importLoaders=1",
              "ttf-module-loader",
            ],
          },
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
