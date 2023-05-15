let posts = [];

const postTitleInputNode = document.getElementById("postTitleInput");
const postTextInputNode = document.getElementById("postTextInput");
const newPostBtnNode = document.getElementById("newPostBtn");
const postsNode = document.getElementById("posts");

newPostBtnNode.addEventListener("click", () => {
  const postFromUser = getPostFromUser();
  addPost(postFromUser);
  renderPosts();
});

function getPostFromUser() {
  const title = postTitleInputNode.value;
  const text = postTextInputNode.value;

  return {
    title: title,
    text: text,
  };
}

function addPost({ title, text }) {
  posts.push({
    title,
    text,
  });
}

function getPosts() {
  return posts;
}

function renderPosts() {
  const posts = getPosts();

  let postsHTML = "";

  posts.forEach((post) => {
    postsHTML += `
      <div class="post">
        <p class="post__title">${post.title}</p>
        <p class="post__text">${post.text}</p>
      </div>
    `;
  });

  postsNode.innerHTML = postsHTML;
}
