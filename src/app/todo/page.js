import React from "react";
import { GET } from "../api/todo/route";

export default async function TodoList() {
  // const res=await fetch('http://localhost:3000/api/todo')
  const res = await GET();
  const { data: todos } = await res.json();

  console.log(todos);
  return (
    <>
      {todos.map((todo) => (
        <li key={todo._id}>{todo.title},  {todo.status}</li>
      ))}
    </>
  ); 
}
