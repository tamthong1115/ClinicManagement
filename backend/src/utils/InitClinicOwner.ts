import prisma from './connectDB';
import bcrypt from 'bcryptjs';

const initClinicOwner = async () => {
  try {
    const clinicOwner = await prisma.user.findFirst({
      where: {
        role: 'CLINIC_OWNER',
      },
    });

    if (!clinicOwner) {
      const saltRound = 10;
      const hashedPassword = bcrypt.hashSync('Password!1', saltRound);

      const newUser = await prisma.user.create({
        data: {
          username: 'clinicOwner1',
          password: hashedPassword,
          role: 'CLINIC_OWNER',
        },
      });

      await prisma.clinicOwner.create({
        data: {
          User: {
            connect: {
              id: newUser.id,
            },
          },
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

initClinicOwner().then(() => console.log('Clinic owner initialized'));

// init clinicOwner from admin account
// const initClinicOwnerAdmin = async () => {
//   try {
//     const clinicOwner = await prisma.clinicOwner.create({
//       data: {
//         User: {
//           connect: {
//             username: 'admin',
//           },
//         },
//       },
//     });

//     console.log(clinicOwner);
//   } catch (err) {
//     console.log(err);
//   }
// };

// initClinicOwnerAdmin().then(() => console.log('Init Ok'));
