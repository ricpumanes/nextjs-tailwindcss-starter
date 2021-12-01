module.exports = {
  compress: false,
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // issuer: {
      //   test: /\.(js|ts)x?$/,
      // },
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};
