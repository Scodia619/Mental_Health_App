import axios from 'axios'

export async function getTopics() {
  try {
    const response = await axios.get('http://localhost:8080/topics');
    const topics = response.data.topics || [];
    return topics;
  } catch (error) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message
    );
    return [];
  }
}