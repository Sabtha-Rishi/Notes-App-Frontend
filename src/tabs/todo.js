import React, { useState, useEffect } from "react";
import TodoCreator from "../components/todoCreator";
import TodoList from "../components/todoList";
import Loading from "../pages/loading";
import TodoAPI from "../api/todo.api";

const Todo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);

  const [todos, setTodos] = useState([]);
  /* eslint-disable */
  useEffect(() => {
    TodoAPI.allTodos(setTodos, setIsLoading);
  }, []);

  useEffect(() => {
    TodoAPI.allTodos(setTodos, setIsLoading);
  }, [isUpdated]);
  /* eslint-enable */
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <br></br>
      <TodoCreator
        setIsUpdated={setIsUpdated}
        setIsLoading={setIsLoading}
        isToList={false}
      />
      <TodoList
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
        todos={todos}
        setTodos={setTodos}
        hidden={false}
      />
    </div>
  );
};

export default Todo;
