const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.(png|jpe?g|gif|webp)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 50,
          },
          optipng: {
            enabled: true,
          },
          pngquant: {
            quality: [0.45, 0.55],
            speed: 4,
          },
          webp: {
            quality: 50,
          },
        },
      },
    ],
  })
);
