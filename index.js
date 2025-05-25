// Write your code here!
// Fetch and display posts from the external API
async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Function to display posts in the DOM
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Call the async function when the page loads
document.addEventListener('DOMContentLoaded', getPosts);
