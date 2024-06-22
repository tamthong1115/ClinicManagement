import prisma from './connectDB';
import bcrypt from 'bcryptjs';

// Initialize admin user
const initAdmin = async () => {
  try {
    const admin = await prisma.user.findFirst({
      where: {
        role: 'SYSTEM_ADMIN',
      },
    });

    if (!admin) {
      const saltRound = 10;
      const hashedPassword = bcrypt.hashSync('Password!1', saltRound);

      await prisma.user.create({
        data: {
          username: 'admin',
          password: hashedPassword,
          role: 'SYSTEM_ADMIN',
        },
      });

      await prisma.systemAdmin.create({
        data: {
          User: {
            connect: {
              username: 'admin',
            },
          },
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

initAdmin().then(() => console.log('Admin initialized'));
