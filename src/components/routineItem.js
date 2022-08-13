import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RoutineAPI from "../api/routine.api";
import TodoList from "./todoList";
import TodoCreator from "./todoCreator";

import RoutineSelector from "./routineSelector";
import ProgressBar from "./progressBar";
import { AiFillEdit } from "react-icons/ai";

const RoutineItem = ({ routines, user, isUpdated, setIsUpdated }) => {
  const [routineId, setRoutineId] = useState(
    user.defaultRoutine || routines[0]._id
  );
  const [routine, setRoutine] = useState({});
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeletable, setIsDeletable] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    RoutineAPI.SingleRoutine(setRoutine, setTodos, setIsLoading, routineId);
  }, []);

  useEffect(() => {
    RoutineAPI.SingleRoutine(setRoutine, setTodos, setIsLoading, routineId);
  }, [isUpdated]);
  useEffect(() => {
    RoutineAPI.SingleRoutine(setRoutine, setTodos, setIsLoading, routineId);
  }, [isEdited]);

  useEffect(() => {
    RoutineAPI.SingleRoutine(setRoutine, setTodos, setIsLoading, routineId);
  }, [routineId]);
  /* eslint-enable */

  const toggleEditing = () => {
    setIsDeletable((prev) => !prev);
  };

  if (isLoading) {
    return <></>;
  }

  return !routine.isArchieved ? (
    <SingleRoutine>
      <div className="routine-details">
        {/* <h3 className="routine-title">{routine.name}</h3> */}

        <div className="routine-title">
          <RoutineSelector
            routines={routines}
            routine={routine}
            setRoutineId={setRoutineId}
          />
        </div>
        <button className="edit-btn" onClick={toggleEditing}>
          <AiFillEdit />
        </button>
      </div>

      <div className="todo-container">
        {isDeletable && (
          <TodoCreator
            setIsUpdated={setIsEdited}
            setIsLoading={setIsLoading}
            listID={routineId}
            isToRoutine={true}
          />
        )}
        <TodoList
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isUpdated={isEdited}
          setIsUpdated={setIsEdited}
          todos={todos}
          setTodos={setTodos}
          hidden={true}
          isDeletable={isDeletable}
        />
      </div>

      <ProgressBar todos={todos} />
    </SingleRoutine>
  ) : (
    <div></div>
  );
};

export default RoutineItem;

const SingleRoutine = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  margin: 15px auto;
  overflow: hidden;
  transition-duration: 0.4s;
  border: 1px solid lighgrey;

  .routine-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
  }

  .routine-title {
    font-weight: bold;
    margin: 0;
    text-transform: capitalize;
  }
  .edit-btn {
    border: none;
    background: none;
    font-size: 17px;
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
