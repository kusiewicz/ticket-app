import { NextApiHandler } from 'next';
import { handleLogin } from '@auth0/nextjs-auth0';

const login: NextApiHandler = async (req, res) => {
  try {
    await handleLogin(req, res);
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).end(e.message);
  }
};

export default login;
