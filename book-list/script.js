async function getUsers() {
    const data = await fetch("https://www.anapioficeandfire.com/api/books");
    const users = await data.json();
    console.log(users);
    users.forEach((user) => createUser(user));
  }
  getUsers();
  function createUser({
    name,
    isbn,
    numberOfPages,
    authors,
    publisher,
    released,
    characters
  }) {
    const info = document.createElement("div");
    info.setAttribute("class", "container");
    info.innerHTML = `
     <div class="book-container">
     <div class="details">
       <h3>Book Name : ${name}</h3>
       <p><b>isbn:</b>${isbn}</p>
       <p><b>Number Of Pages:</b>${numberOfPages}</p>
       <p><b>Authors:</b>${authors}</p>
       <p><b>Publisher Name:</b>${publisher}</p>
  <p><b>Released Date:</b>${released}</p>
  <p class="over"><b>Characters:</b>${characters.slice(0, 8)}</p>
    </div>
  </div>
  `;
    document.querySelector(".book-list").append(info);
  }
  