import React from "react";
import styled from "styled-components";
import CATEGORY_DATA from "../_DATA/CATEGORY_DATA";

// import { IoTrophySharp } from "react-icons/io"

const singleTransaction = ({ transaction, setIsUpdated }) => {
  return (
    <SingleTransaction>
      <div className="transaction-detail">
        <div className="name-category">
          {/* <p className="icon">{CATEGORY_DATA[transaction.category]}</p> */}
          <p>{transaction.title}</p>
        </div>
        {transaction.isProfit ? (
          <p className="profit">{transaction.amount}</p>
        ) : (
          <p className="loss">{transaction.amount}</p>
        )}
      </div>
      <p>{transaction.isProfit}</p>
    </SingleTransaction>
  );
};

export default singleTransaction;

const SingleTransaction = styled.div`
  display: flex;

  .transaction-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 13px;
  }

  .name-category {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .icon {
    padding-top: 2px;
  }

  .profit {
    height: 25px;
    align-items: center;
    width: 60px;
    justify-content: center;
    display: flex;
    background-color: #d5ebd8;
    border-radius: 5px;
    color: black;
    font-size: 13px;
  }
  .loss {
    height: 25px;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    width: 60px;
    display: flex;
    background-color: #ffdad6;
    border-radius: 5px;
    color: black;
  }
`;
