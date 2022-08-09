import React, { useState } from "react";
import styled from "styled-components";

const TodoCreator = () => {
  const [newTask, setNewTask] = useState("");

  const createTodo = (e) => {
    e.preventDefault();
  };
  return (
    <NewTodo>
      <form className="form-elements">
        <input
          type="input"
          className="input"
          placeholder=""
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          value={newTask}
        />
        <button className="add-btn">+</button>
      </form>
    </NewTodo>
  );
};

export default TodoCreator;

const NewTodo = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  width: 50vw;
  margin: 0 auto;
  overflow: hidden;
  transition-duration: 0.4s;
  /* background-color: black; */
  /* box-shadow: 10px 20px 20px #e3e3e3; */
  gap: 10px;
  background-color: #f7f9fb;
  border-radius: 7px;
  z-index: 10;
  background: none;

  .input {
    height: 50px;
    font-size: 20px;
    color: black;
    background: none;
    border-radius: 7px;
    border: 1px solid black;
    min-width: 80%;

    /* border: none; */
  }

  .input:focus {
    padding-left: 10px;
    font-weight: bold;
  }

  .input:placeholder-shown {
    padding-left: 10px;
  }
  .form-elements {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .add-btn {
    display: flex;
    margin: 2px auto;
    margin-bottom: 0;
    border: none;
    font-size: 30px;
    background: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;
    }
  }
`;
