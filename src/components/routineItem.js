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
  console.log(user.defaultRoutine, "default routine");
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

  const setDefault = () => {
    setIsLoading(true);
    RoutineAPI.setDefault(setIsUpdated, setIsLoading, routineId);
  };

  const resetRoutine = () => {
    setIsLoading(true);
    RoutineAPI.reset(setIsUpdated, setIsLoading, routineId);
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
            routineId={routineId}
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
          setIsUpdated={setIsEdited}
          todos={todos}
          hidden={true}
          isDeletable={isDeletable}
        />
        {isDeletable && (
          <div className="routine-btns">
            {user.defaultRoutine === routineId ? (
              // <div className="default-tag">Default</div>
              <></>
            ) : (
              <button className="btn" onClick={setDefault}>
                Set default
              </button>
            )}
            <button className="btn" onClick={resetRoutine}>
              Reset
            </button>
            <button className="btn">Delete</button>
          </div>
        )}
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
    cursor: pointer;
  }
  .btn {
    border: none;
    background: none;
    color: #5397db;
    cursor: pointer;
  }

  .edit-btn {
    border: none;
    background: none;
    font-size: 17px;
    cursor: pointer;
  }
  .add-to-todo {
    margin-right: 10px;
  }
  .routine-btns {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }
  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 15px auto;
    }
  }
`;
