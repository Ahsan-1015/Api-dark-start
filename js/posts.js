function postUsers() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postDisplay(data));
}

function postDisplay(data) {
  const postContainer = document.getElementById('posts-container');

  for (const user of data) {
    console.log(user);
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
      <h5>user: ${user.userId}</h5>
      <p>Title: ${user.title}</p>
      <p>Description: ${user.body}</p>

    `;

    postContainer.appendChild(div);
  }
}

postUsers();
