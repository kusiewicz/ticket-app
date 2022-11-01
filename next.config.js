const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    env: {
      REDIRECT_URI: isDev
        ? 'http://localhost:3000/api/callback'
        : 'https://ticket-app-lilac.vercel.app/api/callback',
      POST_LOGOUT_REDIRECT_URI: isDev
        ? 'http://localhost:3000'
        : 'https://ticket-app-lilac.vercel.app/',
      AUTH0_SCOPE: 'openid email profile',
      SERVER_URL: isDev ? 'http://localhost:3000' : 'https://ticket-app-lilac.vercel.app/',
      AUTH0_BASE_URL: isDev ? 'http://localhost:3000' : 'https://ticket-app-lilac.vercel.app/',
    },
  };
};

// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// module.exports = (phase) => {
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER;

//   return {
//     env: {
//       REDIRECT_URI: isDev
//         ? 'https://ticket-app-lilac.vercel.app/api/auth/callback'
//         : 'https://ticket-app-lilac.vercel.app/api/auth/callback',
//       POST_LOGOUT_REDIRECT_URI: isDev
//         ? 'https://ticket-app-lilac.vercel.app/'
//         : 'https://ticket-app-lilac.vercel.app/',
//       AUTH0_SCOPE: 'openid email profile',
//       SERVER_URL: isDev
//         ? 'https://ticket-app-lilac.vercel.app/'
//         : 'https://ticket-app-lilac.vercel.app/',
//       AUTH0_BASE_URL: isDev
//         ? 'https://ticket-app-lilac.vercel.app/'
//         : 'https://ticket-app-lilac.vercel.app/',
//     },
//   };
// };
