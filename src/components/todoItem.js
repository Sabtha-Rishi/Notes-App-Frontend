import React, { useState } from "react";
import TodoAPI from "../api/todo.api";
import Loading from "../pages/loading";

import styled from "styled-components";

const TodoItem = ({ todo, setIsUpdated, hidden }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isDeleted, setIsDeleted] = useState(todo.isArchieved);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = () => {
    setIsLoading(true);
    TodoAPI.updateTodo(
      setIsUpdated,
      setIsLoading,
      todo._id,
      isCompleted,
      setIsCompleted
    );
  };

  const handleDelete = () => {
    setIsLoading(true);
    TodoAPI.deleteTodo(setIsUpdated, setIsLoading, todo._id, setIsDeleted);
  };

  if (isLoading) {
    return <Loading />;
  }
  return !isDeleted & (todo.isHidden === hidden) ? (
    <SingleTodo>
      <div className="todo-item">
        {todo.isCompleted ? (
          <button
            className="checkbox complete"
            onClick={handleComplete}
          ></button>
        ) : (
          <button className="checkbox" onClick={handleComplete}></button>
        )}
        {todo.isCompleted ? (
          <div className="task-complete">{todo.task}</div>
        ) : (
          <div className="task">{todo.task}</div>
        )}
      </div>
      <div className="delete" onClick={handleDelete}>
        X
      </div>
    </SingleTodo>
  ) : (
    <div></div>
  );
};

export default TodoItem;

const SingleTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;

  .todo-item {
    display: flex;
    gap: 20px;
    align-items: center;
    /* padding-top: 10px; */
    margin: auto 0;
  }
  .checkbox {
    border: 2px solid black;
    min-width: 20px;
    min-height: 20px;
    border-radius: 100%;
    cursor: pointer;
    background-color: white;
  }

  .task {
    font-size: 15px;
  }
  .task-complete {
    text-decoration: line-through;
    font-size: 15px;
    opacity: 50%;
  }
  .complete {
    background-color: #5397db;
  }
  .delete {
    font-size: 15px;
    cursor: pointer;
    margin-left: 10px;
  }
`;
