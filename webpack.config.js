const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  }];

  return loaders;
};

const config = {
  entry: {
    main: path.resolve(__dirname, './src/pages/main/index.js'),
    pets: path.resolve(__dirname, './src/pages/pets/index.js'),
  },
  output: {
    filename: './js/[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    host: 'localhost',
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pages/main/index.html',
      chunks: ['main'],
      minify: {
        collapseWhitespace: isProduction
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'pets.html',
      template: 'src/pages/pets/index.html',
      chunks: ['pets'],
      minify: {
        collapseWhitespace: isProduction
      }
    }),
    new MiniCssExtractPlugin({
      filename: './css/[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/assets/images/pets'),
        to: path.resolve(__dirname, 'dist/assets/images')
      }, ]
    }),
  ],
  performance: {
    maxAssetSize: 1000000,
  },
  module: {
    rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [stylesHandler,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {

                    },
                  ],
                ],
              },
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
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(ttf|woff2|woff|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      fonts: path.resolve(__dirname, './src/assets/fonts'),
      images: path.resolve(__dirname, './src/assets/images'),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
