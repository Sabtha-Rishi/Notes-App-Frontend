import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListAPI from "../api/list.api";
import TodoItem from "./todoItem";
import TodoList from "./todoList";

const ListItem = ({ listID }) => {
  const [list, setList] = useState([]);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    ListAPI.SingleList(setList, setTodos, setIsLoading, listID);
  }, []);

  useEffect(() => {
    ListAPI.SingleList(setList, setTodos, setIsLoading, listID);
  }, [isUpdated]);

  if (isLoading) {
    return <></>;
  }
  return (
    <SingleList>
      <div className="list-details">
        <h3 className="list-title">{list.title}</h3>
        <p className="list-desc">{list.desc}</p>
      </div>
      <div className="todo-container">
        <TodoList
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
          todos={todos}
          setTodos={setTodos}
          hidden={true}
        />
      </div>
    </SingleList>
  );
};

export default ListItem;

const SingleList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  margin: 50px auto;
  overflow: hidden;
  transition-duration: 0.4s;
  border: 1px solid lighgrey;
  background: none;

  .list-details {
    display: flex;
    flex-direction: column;
  }

  .list-title{
    font-weight:bold;
    margin: 0;
  }
  .list-desc {
    font-size: 15px;
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;
    }
  }
`;
