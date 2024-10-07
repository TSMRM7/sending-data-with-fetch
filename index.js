// Add your code here
function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const data = {
      name: name,
      email: email
    };
  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(object => {
      const body = document.querySelector('body');
      const newId = document.createElement('p');
      newId.textContent = `New ID: ${object.id}`;
      body.appendChild(newId);
    })
    .catch(error => {
      const body = document.querySelector('body');
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Error: ${error.message}`;
      body.appendChild(errorMessage);
    });
  }
  