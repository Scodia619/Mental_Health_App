const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

exports.createUser = async (first_name, last_name, email, phone) => {
    const data = {
        first_name,
        last_name,
        email,
        phone,
    }
    return prisma.user.create({data})
}