const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const absoluteOutputFolder = path.join(__dirname, './dist');

const outputDirectory = 'dist';


module.exports =  {

    mode: 'development',

    entry: {
        main: './src/client/index.js',
        fonts: './node_modules/@fortawesome/fontawesome-free/js/all.min.js'
      },

      output: {
        path: path.join(__dirname, outputDirectory),
        filename: '[name].js',
      },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },

        {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: () => [require('precss'), require('autoprefixer')],
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
              ],

        },


        ]
    },

    devServer: {
      port: 3000,
      open: true,
      proxy: {
        '/api': 'http://localhost:8080'
      }
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),

        new htmlPlugin({
            template: './public/index.html'
        }),

        new CleanWebpackPlugin([outputDirectory]),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
          })

    ]

};
