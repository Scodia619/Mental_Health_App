import CreatePost from "./components/createPost";
import CreateUser from "./components/createUser";
import CreateTopic from "./components/createTopic";
const {getTopics} = require('./fetchingData/getTopics')

export default async function Home() {

  const fetchTopicsData = async () => {
    const topics = await getTopics();
    console.log(topics);
    return topics;
  };

  const topics = await fetchTopicsData()
  console.log("Index Topics: ", topics)

  return (
    <main>
      <title>Mental Health App</title>
      <CreateUser />
      <CreateTopic />
      <CreatePost topics={topics}/>
    </main>
  );
}