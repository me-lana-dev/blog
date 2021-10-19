import React, { useState, useRef } from "react";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description of Javascript" },
    { id: 2, title: "Python", body: "Description of Python" },
    { id: 3, title: "PHP", body: "Description of PHP" },
    { id: 4, title: "JAVA", body: "Description of JAVA" },
    { id: 5, title: "Go", body: "Description of Go" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    console.log(posts);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Список постов 1"} />
    </div>
  );
}

export default App;
