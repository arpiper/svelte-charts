var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

var devtool = PRODUCTION
  ? ''
  : 'source-map';

var entry = PRODUCTION
  ? {
    "svelte-charts": "./components/Main.html",
  }
  : [
    "./src/index.js",
  ];

var output = PRODUCTION
  ? {
    filename: "[name].lib.js",
    publicPath: '/dist/',
    path: path.resolve(__dirname, "./dist"),
    library: "[name]",
    libraryTarget: "umd"
  }
  : {
    filename: "build.js",
    publicPath: '/dist/',
    path: path.resolve(__dirname, "./dist")
  };

var externals = PRODUCTION
  ? {
    "jquery": {
      commonjs: "$",
      amd: "$",
      root: "$"
    },
    "d3": {
      commonjs: "d3",
      amd: "d3",
      root: "d3"
    }
  }
  : {};

var plugins = PRODUCTION
  ? [
    new HtmlWebpackPlugin({
      chunksSortMode: "dependency"
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        keep_fnames: true
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ]
  : [
    new webpack.HotModuleReplacementPlugin()
  ];

module.exports = {
  devtool: devtool,
  entry: entry,
  output: output,
  externals: externals,
  plugins: plugins,
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "components"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(js|html)$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        include: [
          path.resolve(__dirname, "components"),
          path.resolve(__dirname, "js")
        ],
        use: {
          loader: "babel-loader",
          query: {
            presets: ["env"],
            plugins: ["add-module-exports"]
          }
        }
      },
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            format: "iife"
          }
        }
      },
    ]
  }
};
