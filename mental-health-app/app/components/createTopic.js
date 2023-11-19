'use client'

export default function createTopic() {
  const handleAddTopic = (event) => {
    event.preventDefault();

    const postData = {
      topic_name: document.getElementById("topic_name").value,
    };

    console.log(postData);

    axios
      .post("http://localhost:8080/addTopic", postData)
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
      <h1>Add Topic</h1>
      <form id="addTopic" className="flex flex-col">
        <label htmlFor="topic_name">Topic Name</label>
        <input type="text" name="topic_name" id="topic_name" />
        <button onClick={handleAddTopic}>Add</button>
      </form>
    </section>
  );
}
