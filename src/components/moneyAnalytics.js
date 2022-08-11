import React from "react";
import styled from "styled-components";
import { FaPiggyBank, FaMoneyBillWaveAlt } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
const moneyAnalytics = ({ transactions }) => {
  let profit = 0;
  let loss = 0;

  const analyse = () => {
    transactions.map((transaction) => {
      if (transaction.isProfit) {
        profit = profit + transaction.amount;
      } else {
        loss = loss + transaction.amount;
      }
      return;
    });
  };
  analyse();
  let balance = profit - loss;
  console.log(profit, loss, balance);

  return (
    <Analytics>
      <div className="analytics">
        <p className="analytics-variable">
          <FaMoneyBillWaveAlt />
          {profit}
        </p>
        <p className="analytics-variable">
          <RiShoppingCart2Fill />
          {loss}
        </p>
        <p className="analytics-variable">
          <FaPiggyBank /> {balance}
        </p>
      </div>
    </Analytics>
  );
};

export default moneyAnalytics;

const Analytics = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  margin: 50px auto;
  overflow: hidden;
  transition-duration: 0.4s;
  background-color: #f7f9fb;
  border: 1px solid lighgrey;

  .analytics {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10px;
  }

  .analytics-variable {
    font-size: small;
    opacity: 70%;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;
    }
  }
`;
