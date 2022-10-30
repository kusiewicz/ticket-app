import { handleCallback } from '@auth0/nextjs-auth0';
import { NextApiHandler } from 'next';

const callback: NextApiHandler = async (req, res) => {
  try {
    await handleCallback(req, res, { redirectUri: '/api/init' });
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).end(e.message);
  }
};

export default callback;
