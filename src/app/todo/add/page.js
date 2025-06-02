"use client";
import React, { useState } from "react";

export default function AddTodo() {
  const [todo, setTodo] = useState({ title: "", status: "" });
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/todo", {
        method: "POST",
        body: JSON.stringify(todo),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (ev) => {
    if (ev.target.name == "todoTitle") {
      setTodo({ ...todo, title: ev.target.value });
    } else if (ev.target.name == "status") {
      setTodo({ ...todo, status: ev.target.value });
    }
    // setTodo({ ...todo, [ev.target.name]: ev.target.value });
    // console.log(todo);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => handleChange(e)}
            name="todoTitle"
            className="form-control"
            id="todoTitle"
          />
          {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="todostatus" className="form-label">
            ToDo Status
          </label>
          <input
            type="text"
            value={todo.status}
            onChange={(e) => handleChange(e)}
            name="status"
            className="form-control"
            id="todostatus"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          ADD Todo
        </button>
      </form>
    </>
  );
}
