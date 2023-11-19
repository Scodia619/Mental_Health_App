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

exports.addPost = async (title, content,user_id, is_private) => {
    const data = {title, content, user_id, is_private}
    return prisma.posts.create({data})
}