import React, { useState } from "react";
import TodoCreator from "../components/todoCreator";
import TodoList from "../components/todoList";

const Todo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  return (
    <div>
      <TodoCreator setIsUpdated={setIsUpdated} setIsLoading={setIsLoading} />
      <TodoList
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
      />
    </div>
  );
};

export default Todo;
