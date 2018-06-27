let path = require('path');
module.exports = {
  // mode: 'development',
  entry: require.resolve('./main.less'),
  output: {
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'less-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)(\?.*)?$/,
        use: [
              {
                  loader: 'url-loader',
              }
          ]
      },
    ],
  },
  devServer: {
    inline: true,
  },
};
