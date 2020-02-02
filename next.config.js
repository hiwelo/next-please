/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  webpack(config, { isServer }) {
    // Fixes scripts depending on `fs` module
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: 'empty',
      };
    }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};
