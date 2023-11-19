"use client";
import axios from 'axios';
export default function createPost({topics}) {

  console.log("Props: ", topics)

  const handleAddPost = (event) => {
    event.preventDefault();

    const selectElement = document.getElementById("topics").value
    console.log(document.getElementById('isPrivate').checked)

    console.log("Selected Element Data: ", selectElement);

    const postData = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
      user_id: 6,
      tags: selectElement,
      is_private: document.getElementById('isPrivate').checked,
    };

    console.log(postData);

    axios
      .post("http://localhost:8080/addPost", postData)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <section>
      <h1>Add Post</h1>
      <form id="addPost" className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">Post Content</label>
        <input type="text" name="content" id="content" />
        <select name="topics" id="topics">
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.topic_name}
            </option>
          ))}
        </select>
        <label htmlFor="myCheckbox">Is it for the journal only</label>
        <input type="checkbox" name="community" id="isPrivate" />
        <button onClick={handleAddPost}>Add Post</button>
      </form>
    </section>
  );
}

