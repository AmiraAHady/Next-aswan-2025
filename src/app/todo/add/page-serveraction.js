import { todoModel } from "@/app/_lib/models/todo";
import { redirect } from "next/navigation";
import React from "react";

export default function AddTodo() {
  async function addToDo(formData) {
    "use server";
    let title = formData.get("todoTitle");
    let status = formData.get("todoStatus");
    await todoModel.create({ title, status });
    redirect("/todo");
  }

  return (
    <>
      <form action={addToDo}>
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
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
            name="todoStatus"
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
