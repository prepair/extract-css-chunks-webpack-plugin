import Self from '../../../src';

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [Self.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new Self({
      filename: '[name].css',
      /* eslint-disable func-names, object-shorthand, prefer-template */
      processLinkHref: function(x) {
        return x + '.dummy';
      },
      /* eslint-enable func-names, object-shorthand, prefer-template */
    }),
  ],
};
