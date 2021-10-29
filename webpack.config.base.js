const path = require("path");
const TailwindCss = require("tailwindcss");
const Autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  TailwindCss,
                  Autoprefixer
                ]
              }
            }
          }
        ]
      },
    ],
  },

  plugins: [
    new CopyPlugin(
      {
        patterns: [
          { from: "static", to: path.resolve(__dirname, "dist")}
        ]
      }
    ),
    new WriteFilePlugin(),
    new HtmlWebpackPlugin({
      template: "./html/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "404.html",
      template: "./html/404.html",
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),

  ]
};
