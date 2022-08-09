import React from "react";
import Data from "./_data";
import styled from "styled-components";

import TodoItem from "./todoItem";
const singleTodo = () => {
  return (
    <TodoContainer>
      {Data.todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </TodoContainer>
  );
};

export default singleTodo;

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
  gap: 10px;
  background-color: #faeade;

  .password {
    backdrop-filter: blur(50px);
    z-index: 50;
    border-radius: 5px;
  }
  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;
    }
  }
`;
