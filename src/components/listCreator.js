import React, { useState } from "react";
import styled from "styled-components";
import ListAPI from "../api/list.api";
import { BsArrowRight } from "react-icons/bs";

const ListCreator = ({ setIsUpdated, setIsLoading, setIsVisible }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const createList = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      desc: desc,
    };
    setIsLoading(true);
    ListAPI.createList(setIsUpdated, setIsLoading, data);
    setIsVisible(false);
  };
  return (
    <NewList>
      <form className="form-elements" onSubmit={createList}>
        <input
          className="input"
          placeholder="List name"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <input
          className="input"
          placeholder="Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />
        <button className="add-btn" type="submit" onSubmit={createList}>
          Add list <BsArrowRight />
        </button>
      </form>
    </NewList>
  );
};

export default ListCreator;

const NewList = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  min-width: 50vw;
  max-width: 50vw;

  margin: 0 auto;
  overflow: hidden;
  transition-duration: 0.4s;
  background-color: black;
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
    min-width: 500px;
    max-width: 500px;
  }

  .input:focus {
    padding-left: 10px;
    font-weight: bold;
    outline: none;
    flex-wrap: wrap;
  }

  .input:placeholder-shown {
    padding-left: 10px;
  }
  .form-elements {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
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
