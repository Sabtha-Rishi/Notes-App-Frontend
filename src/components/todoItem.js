import React, { useState, useEffect } from "react";

import styled from "styled-components";

const TodoItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  useEffect(() => {}, []);

  const handleComplete = () => {
    setIsCompleted((prev) => !prev);
  };

  return !isDeleted ? (
    <SingleTodo>
      <div className="todo-item">
        {isCompleted ? (
          <button
            className="checkbox complete"
            onClick={handleComplete}
          ></button>
        ) : (
          <button className="checkbox" onClick={handleComplete}></button>
        )}
        {isCompleted ? (
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
  padding: 10px 30px;

  .todo-item {
    display: flex;
    gap: 20px;
    align-items: center;
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
