import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import DATA from "../_DATA/CATEGORY_DATA";
import TransactionAPI from "../api/transaction.api";

const TransactionCreator = ({
  setIsUpdated,
  setIsLoading,
  setIsCreatorVisible,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isProfit, setIsProfit] = useState(false);

  const toggleProfit = (e) => {
    e.preventDefault();
    setIsProfit((prev) => !prev);
  };

  const createTransaction = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      title: title,
      amount: parseInt(amount),
      category: category.toLowerCase(),
      isProfit: isProfit,
    };
    TransactionAPI.createTransaction(
      setIsUpdated,
      setIsLoading,
      data,
      setIsCreatorVisible
    );
  };

  return (
    <NewTransaction>
      <form className="form-elements" onSubmit={createTransaction}>
        <div className="text-inputs">
          <input
            className="input"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <input
            className="input"
            placeholder="Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </div>
        <div className="options">
          <select
            className="category"
            value={category}
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {DATA.options.map((option) => {
              return (
                <option className="input-option" name="category">
                  {option.length > 0 && option}
                </option>
              );
            })}
          </select>
          {isProfit ? (
            <button className="profit" onClick={toggleProfit}>
              Earned
            </button>
          ) : (
            <button className="loss" onClick={toggleProfit}>
              Spent
            </button>
          )}
        </div>
        <button className="add-btn" type="submit" onclick={createTransaction}>
          Add Transaction <BsArrowRight />
        </button>
      </form>
    </NewTransaction>
  );
};

export default TransactionCreator;

const NewTransaction = styled.div`
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
    /* border-radius: 7px; */
    border: none;
    border-bottom: 1px solid lightgrey;
    min-width: 500px;
    max-width: 500px;
  }
  .text-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  .options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    padding: 0 50px;
  }
  .category {
    display: flex;
    width: 150px;
    height: 30px;
    border: none;
  }

  .loss {
    background: none;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    background-color: #ffdad6;
  }
  .profit {
    font-weight: bold;
    background: none;
    border: none;
    border-radius: 3px;
    background-color: #d5ebd8;
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
