import React from "react";
import styled from "styled-components";
import Analytics from "../components/moneyAnalytics";

import TransactionItem from "./singleTransaction";

const AllTransactions = ({ setIsUpdated, transactions, search }) => {
  const results = transactions.filter((transaction) => {
    let key = search.toLowerCase();
    return (
      transaction.title.toLowerCase().includes(key) ||
      transaction.category.includes(key) ||
      transaction.amount < key ||
      transaction.isProfit & (key === "earned") ||
      !transaction.isProfit & (key === "spent")
    );
  });

  return (
    <TransactionContainer>
      {results.map((transaction) => {
        return (
          <TransactionItem
            transaction={transaction}
            key={transaction._id}
            setIsUpdated={setIsUpdated}
          />
        );
      })}
      <Analytics transactions={results} />
    </TransactionContainer>
  );
};

export default AllTransactions;

const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  margin: 50px auto;
  overflow: hidden;
  transition-duration: 0.4s;
  box-shadow: 10px 10px 25px #e3e3e3;
  background-color: #f7f9fb;
  border: 1px solid lighgrey;

  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;
    }
  }
`;
