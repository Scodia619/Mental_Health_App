const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllTopics = async () => {
  return prisma.topic.findMany();
};

exports.postTopics = async (topic_id, post_id) => {
  const data = {
    post_id,
    topic_id
  }

  console.log(data, "Pre Post Data")

  return prisma.postTopics.create({data})
}