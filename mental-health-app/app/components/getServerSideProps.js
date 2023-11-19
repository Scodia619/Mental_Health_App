export async function getServerSideProps() {
    try {
      const response = await axios.get("http://localhost:8080/topics");
      const topics = response.data.topics || [];
      return { props: { topics } };
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      return { props: { topics: [] } };
    }
  }