import React, { useState, useRef } from "react";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import "./styles/App.css";

function App() {
  const [posts] = useState([
    { id: 1, title: "Javascript", body: "Description of Javascript" },
    { id: 2, title: "Python", body: "Description of Python" },
    { id: 3, title: "PHP", body: "Description of PHP" },
    { id: 4, title: "JAVA", body: "Description of JAVA" },
    { id: 5, title: "Go", body: "Description of Go" },
  ]);

  const [title, setTitle] = useState("");
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Список постов 1"} />
    </div>
  );
}

export default App;
