import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListAPI from "../api/list.api";
import TodoList from "./todoList";
import TodoCreator from "./todoCreator";
import { AiFillDelete } from "react-icons/ai";

const ListItem = ({ listID }) => {
  const [list, setList] = useState([]);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    ListAPI.SingleList(setList, setTodos, setIsLoading, listID);
  }, []);

  useEffect(() => {
    ListAPI.SingleList(setList, setTodos, setIsLoading, listID);
  }, [isUpdated]);
  /* eslint-enable */
  const toggleVisibility = () => {
    setIsExpanded((prev) => !prev);
  };
  if (isLoading) {
    return <></>;
  }

  const handleListDelete = (e) => {
    e.preventDefault();
    setIsLoading(true);
    ListAPI.deleteList(setIsUpdated, setIsLoading, listID);
  };
  return !list.isArchieved ? (
    <SingleList>
      <div className="list-container" onClick={toggleVisibility}>
        <div className="list-details">
          <h3 className="list-title">{list.title}</h3>
          <p className="list-desc">{list.desc}</p>
        </div>
        <button className="del-icon" onClick={handleListDelete}>
          <AiFillDelete />
        </button>
      </div>

      {isExpanded && (
        <div>
          <div className="add-to-todo">
            <TodoCreator
              setIsUpdated={setIsUpdated}
              setIsLoading={setIsLoading}
              isToList={true}
              listID={list._id}
            />
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
              isDeletable={true}
            />
          </div>
        </div>
      )}
    </SingleList>
  ) : (
    <div></div>
  );
};

export default ListItem;

const SingleList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  margin: 15px auto;
  overflow: hidden;
  transition-duration: 0.4s;
  border: 1px solid lighgrey;

  .list-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
  }
  .del-icon {
    margin-bottom: 55px;
    background: none;
    border: none;
    font-size: 15px;
    z-index: 70;
  }
  .list-details {
    display: flex;
    flex-direction: column;
  }

  .list-title {
    font-weight: bold;
    margin: 0;
  }
  .list-desc {
    font-size: 15px;
  }
  .add-to-todo {
    margin-right: 10px;
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 15px auto;
    }
  }
`;
