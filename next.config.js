module.exports = {
  images: {
    domains: ['meet.jobs', 'images.unsplash.com', 'platform-lookaside.fbsbx.com'],
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
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    EMAIL_ACCOUNT: process.env.EMAIL_ACCOUNT,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_URI:
      process.env.NODE_ENV === 'production'
        ? process.env.FACEBOOK_URI
        : 'http://localhost:3000/oauth/facebook',
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
  },
  // async rewrites() {
  //   return {
  //     fallback: [
  //       {
  //         source: '/v1/:path*',
  //         destination: `http://localhost:3001/v1/:path*`,
  //       },
  //     ],
  //   };
  // },
};
