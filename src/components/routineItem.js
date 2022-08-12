import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RoutineAPI from "../api/routine.api";
import TodoList from "./todoList";
import RoutineSelector from "./routineSelector";
import ProgressBar from "./progressBar";

const RoutineItem = ({ routines, user }) => {
  const [routineId, setRoutineId] = useState(user.defaultRoutine);
  const [routine, setRoutine] = useState({});
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    RoutineAPI.SingleRoutine(setRoutine, setTodos, setIsLoading, routineId);
  }, []);

  useEffect(() => {
    RoutineAPI.SingleRoutine(setRoutine, setTodos, setIsLoading, routineId);
  }, [isUpdated]);

  useEffect(() => {
    RoutineAPI.SingleRoutine(setRoutine, setTodos, setIsLoading, routineId);
  }, [routineId]);
  /* eslint-enable */

  if (isLoading) {
    return <></>;
  }

  return !routine.isArchieved ? (
    <SingleRoutine>
      <div className="routine-details">
        <h3 className="routine-title">{routine.name}</h3>

        <div className="routine-selector">
          <RoutineSelector
            routines={routines}
            routine={routine}
            setRoutineId={setRoutineId}
          />
        </div>
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
    margin-left: 10px;
    text-transform: capitalize;
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
