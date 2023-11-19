const communityRepository = require('../Repositories/communityRepository')

exports.getAllTopics = async () => {
    return communityRepository.getAllTopics()
}

exports.postTopics = async (tags, post_id) => {
    return communityRepository.postTopics(tags, post_id)
}