import { NextApiHandler } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const init: NextApiHandler = async (req, res) => {
  try {
    const session = await getSession(req, res);
    const sessionUser = session.user;

    const sub: string = sessionUser.sub;
    const nickname: string = sessionUser.nickname;
    const email: string = sessionUser.email;
    const name: string = sessionUser.name;
    const picture: string = sessionUser.picture;

    let user = await prisma.user.findFirst({ where: { authId: sub } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: email,
          handle: nickname,
          name: name,
          picture: picture,
          authId: sub,
          ticket: {
            create: {},
          },
        },
      });
    } else {
      user = await prisma.user.update({
        where: {
          authId: user.authId,
        },
        data: {
          handle: nickname,
          email: email,
          picture: picture,
          name: name,
        },
      });
    }

    const ticket = await prisma.ticket.findFirst({
      where: {
        userId: user.id,
      },
    });
    res.writeHead(302, { location: `/ticket/${ticket.ticketNr}` }).end();
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

export default init;
