const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Режим сборки (development для отладки, production для оптимизации)
  mode: 'development',

  // Входной файл
  entry: './src/js/index.js',

  // Выходной файл
  output: {
    path: path.resolve(__dirname, 'dist'), // Выходная директория (dist)
    filename: 'js/bundle.js', // Убрал ./ для корректного пути
    clean: true, // Очищает выходную директорию перед сборкой (Webpack 5)
  },

  // Source maps для удобства отладки
  devtool: 'source-map',

  module: {
    rules: [
      // Транспилируем JS с Babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to separate file
          'css-loader', // Translates CSS into CommonJS
          'postcss-loader', // Adds vendor prefixes
          'sass-loader', // Compiles Sass to CSS
        ],
      },

      // Подключаем шрифты (заменили file-loader на asset/resource для Webpack 5)
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]', // Выходной путь для шрифтов
        },
      },

      // Подключаем изображения (заменили file-loader на asset/resource для Webpack 5)
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]', // Выходной путь для изображений
        },
      },
    ],
  },

  plugins: [
    // Подключаем HTML-шаблон (стили и скрипты встроятся автоматически)
    new HtmlWebpackPlugin({
      title: 'Webpack 5 Starter',
      template: './src/index.html',
      inject: true,
      // Убрал minify опции (устаревшие; для минификации используй html-minifier-terser отдельно)
    }),

    // Кладем стили в отдельный файл
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    // Копируем изображения (обновленный синтаксис для copy-webpack-plugin 6+)
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/img',
          to: 'img',
        },
      ],
    }),
  ],
};

