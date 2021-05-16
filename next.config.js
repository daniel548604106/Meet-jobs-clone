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
    JWT_SECRET: 'daniel548604106601406845FDF',
    MONGODB_URI:
      'mongodb+srv://daniel548604106:newhome601406845@cluster0.9n3x1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    FACEBOOK_CLIENT_ID: 815045899339736,
    FACEBOOK_URI:
      process.env.NODE_ENV === 'production'
        ? 'https://www.taiwzoo.com/oauth/facebook'
        : 'http://localhost:3000/oauth/facebook',
    FACEBOOK_CLIENT_SECRET: 'fb9e3b290452e80322a7c43f1bb6486d',
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
