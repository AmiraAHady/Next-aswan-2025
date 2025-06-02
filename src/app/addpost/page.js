import React from "react";
import { posts } from "../api/postdata/data";
import { redirect } from "next/navigation";

export default function AddPost() {
  async function addNewPost(formData) {
    "use server";
    const title=formData.get('posttitle')
    let newPost = {
        id: posts.length + 1,
        title: title,
      };
      posts.push(newPost);
  redirect('/postlist')
  }
  return (
    <>
      <form action={addNewPost}>
        <input
          type="text"
          name="posttitle"
          placeholder="type your post title"
        />
        <button className="btn btn-primary">Add Post</button>
      </form>
    </>
  );
}
