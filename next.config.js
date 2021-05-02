module.exports = {
  images: {
    domains: ['meet.jobs'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'tw'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'tw',
    localeDetection: true,
  },
};
