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

exports.addTopic = async (topic_name) => {
    const data = {topic_name}
    return prisma.topic.create({data})
}