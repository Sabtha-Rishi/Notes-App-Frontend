import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoAPI from "../api/todo.api";
import Loading from "../pages/loading";

import TodoItem from "./todoItem";

const AllTodos = ({
  isLoading,
  isUpdated,
  setIsLoading,
  setIsUpdated,
  todos,
  setTodos,
  hidden
}) => {
  return (
    <TodoContainer>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo._id}
            setIsUpdated={setIsUpdated}
            hidden={hidden}
          />
        );
      })}
    </TodoContainer>
  );
};

export default AllTodos;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  margin: 50px auto;
  overflow: hidden;
  transition-duration: 0.4s;
  background-color: #fafafa;
  box-shadow: 10px 20px 20px #e3e3e3;
  /* gap: 10px; */
  background-color: #f7f9fb;
  border: 1px solid lighgrey;

  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;
    }
  }
`;
