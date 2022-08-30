/* 
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => displayPosts(data))
}

function displayPosts(posts) {
  // 1. get the container element where you want to add the new elements   <----------!!!
  const postsContainer = document.getElementById('posts-container');
  for (const post of posts) {
  // 2. create child element   <----------!!!
      const postDiv = document.createElement('div');
      postDiv.classList.add('post')
      console.log(post);
  // 3. set innerText or innerHTML   <----------!!!
      postDiv.innerHTML = `
          <h4>User-${post.userId}</h4>
          <h5>Post: ${post.title}</h5>
          <p>Post Description: ${post.body}</p>
      `;
  // 4. appendChild   <----------!!!
      postsContainer.appendChild(postDiv);
  }
}

loadPosts();