// import { initAuth0 } from '@auth0/nextjs-auth0';

// export default initAuth0({
//   clientId: process.env.AUTH0_CLIENT_ID,
//   clientSecret: process.env.AUTH0_CLIENT_SECRET,
//   domain: process.env.AUTH0_DOMAIN,
//   postLogoutRedirectUrl: process.env.POST_LOGOUT_REDIRECT_URL,
//   redirectUrl: process.env.REDIRECT_URL,
//   scope: process.env.AUTH0_SCOPE,
// });

import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();
