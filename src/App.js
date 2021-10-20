import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description of Javascript" },
    { id: 2, title: "Python", body: "Description of Python" },
    { id: 3, title: "PHP", body: "Description of PHP" },
    { id: 4, title: "JAVA", body: "Description of JAVA" },
    { id: 5, title: "Go", body: "Description of Go" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={"Список постов 1"} />
      ) : (
        <h1>Посты не найдены !</h1>
      )}
    </div>
  );
}

export default App;
