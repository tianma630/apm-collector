const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cleanPlugin = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: ['**/*']
});

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html', 
  minify: {
    removeAttributeQuotes: false,
    collapseWhitespace: false,
  },
});

const webpackConfig = {
  output: {
    filename: 'collector.min.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  Object.assign(webpackConfig, {
    mode: 'development',
    entry: './src/index.js',
    plugins: [htmlPlugin],
    devServer: {
      port: '3000',
      quiet: false,
      inline: true,
      stats: "errors-only",
      overlay: false,
      clientLogLevel: "silent",
      compress: true
    }
  });
} else {
  Object.assign(webpackConfig, {
    mode: 'production',
    entry: './src/index.js',
    plugins: [cleanPlugin]
  });
}

module.exports = webpackConfig;
