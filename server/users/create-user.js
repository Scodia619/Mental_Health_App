const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

exports.createUser = (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  prisma.user
    .create({
      data: {
        first_name,
        last_name,
        email,
        phone,
      },
    })
    .then(() => {
      res.json("User Created Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
