import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo() {
    dispatch(addTodo("dheeraj"));
    setInput("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="add task.."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
};

export default AddTodo;
