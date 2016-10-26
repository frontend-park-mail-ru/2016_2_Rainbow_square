var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    'test': "./test.js",
    'main': ["./public/main.js"],
    'login': ["./public/views/login.js"],
    'register': ["./public/views/register.js"],
    'singlePlayer': ["./public/views/singlePlayer.js"],
    'route.spec': ["./public/tests/route.spec.js"],
  },
  output: {
    path: "./public/build",
    filename: "[name].js"
  },
  watch: true,
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css",  {allChunks: true})
  ]
};