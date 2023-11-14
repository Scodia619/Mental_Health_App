const userRepository = require("../Repositories/userRepository");

exports.createUser = async (first_name, last_name, email, phone) => {
  return userRepository.createUser(first_name, last_name, email, phone);
};

exports.addTopic = async (topic_name) => {
  return userRepository.addTopic(topic_name);
};
