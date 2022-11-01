import { handleCallback } from '@auth0/nextjs-auth0';
import { NextApiHandler } from 'next';

const callback: NextApiHandler = async (req, res) => {
  try {
    await handleCallback(req, res, { redirectUri: process.env.REDIRECT_URI });
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

export default callback;
