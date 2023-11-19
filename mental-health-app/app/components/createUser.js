'use client'

export default function createUser() {

    const handlePostUser = (event) => {
        event.preventDefault();
    
        const postData = {
          first_name: document.getElementById("first_name").value,
          last_name: document.getElementById("last_name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value
        }
    
        console.log(postData)
    
        axios.post("http://localhost:8080/createUser", postData)
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
        });
      }

  return (
    <section>
        <h1>Create User</h1>
        <form id="createUser" className='flex flex-col'>
          <label htmlFor="first_name">First Name</label>
          <input type="text" name="first_name" id="first_name" />
          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" id="last_name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" id="phone" />
          <button onClick={handlePostUser}>Post</button>
        </form>
      </section>
  )
}
