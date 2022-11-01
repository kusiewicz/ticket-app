import { NextApiHandler } from 'next';
import { handleLogout } from '@auth0/nextjs-auth0';

const logout: NextApiHandler = async (req, res) => {
  try {
    await handleLogout(req, res);
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).end(e.message);
  }
};

export default logout;
