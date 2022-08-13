import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import RoutineAPI from "../api/routine.api";

const RoutineCreator = ({
  setIsUpdated,
  setIsLoading,
  setIsCreatorVisible,
}) => {
  const [name, setName] = useState("");

  const createRoutine = (e) => {
    e.preventDefault();
    setIsLoading(true);
    RoutineAPI.createRoutine(
      setIsUpdated,
      setIsLoading,
      { name: name },
      setIsCreatorVisible
    );
  };
  return (
    <NewRoutine>
      <form className="form" onSubmit={createRoutine}>
        <input
          className="input"
          placeholder="Name your routine"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button className="add-btn" type="submit" onclick={createRoutine}>
          Add Routine <BsArrowRight />
        </button>
      </form>
    </NewRoutine>
  );
};

export default RoutineCreator;

const NewRoutine = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  min-width: 50vw;
  max-width: 50vw;

  margin: 0 auto;
  overflow: hidden;
  transition-duration: 0.4s;
  background-color: black;
  background-color: #f7f9fb;
  border-radius: 7px;
  z-index: 10;
  background: none;
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  .input {
    height: 50px;
    font-size: 20px;
    color: black;
    background: none;
    /* border-radius: 7px; */
    border: none;
    border-bottom: 1px solid lightgrey;
    width: 100%;
  }
  .input:focus {
    padding-left: 10px;
    font-weight: bold;
    outline: none;
    flex-wrap: wrap;
  }

  .input:placeholder-shown {
    padding-left: 10px;
    font-size: 15px;
  }
  .add-btn {
    display: flex;
    margin: 2px auto;
    margin-bottom: 0;
    border: none;
    background: none;
    cursor: pointer;
    gap: 10px;
    align-items: center;
    font-weight: bold;
    color: #5397db;
  }
  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;

      .input {
        min-width: 80vw;
        max-width: 80vw;
      }
    }
  }
`;
