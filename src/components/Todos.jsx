import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("todos",todos)

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.text}</h3>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
