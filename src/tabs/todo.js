import React from "react";
import TodoCreator from "../components/todoCreator";
import TodoList from "../components/todoList";

const todo = () => {
  return (
    <div>
      <TodoCreator />
      <TodoList />
    </div>
  );
};

export default todo;
