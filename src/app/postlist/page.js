"use client";
import React, { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [postInp, setPostInp] = useState("");
  async function getAllPosts() {
    let data = await fetch("http://localhost:3000/api/postdata");
    let postsData = await data.json();
    console.log(postsData);
    setPosts(postsData);
  }

  async function AddPost() {
    await fetch("http://localhost:3000/api/postdata", {
      method: "POST",
      body: JSON.stringify({ title: postInp }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    getAllPosts()
    setPostInp("")
  }

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
      <input
        type="text"
        value={postInp}
        onChange={(e) => setPostInp(e.target.value)}
        placeholder="type your post title"
      />
      <button className="btn btn-primary" onClick={() => AddPost()}>
        Add Post
      </button>
    </>
  );
}
