import React, { useState, useEffect } from "react";
import Loading from "../pages/loading";
import TransactionAPI from "../api/transaction.api";
import TransactionList from "../components/transactionList";
import SearchTransaction from "../components/searchTransactions";
import TransactionCreator from "../components/transactionCreator";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import styled from "styled-components";
const Money = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isCreatorVisible, setIsCreatorVisible] = useState(false);
  const [search, setSearch] = useState("");

  const [transactions, setTransactions] = useState([]);
  /* eslint-disable */
  useEffect(() => {
    TransactionAPI.allTransactions(setTransactions, setIsLoading);
  }, []);

  useEffect(() => {
    TransactionAPI.allTransactions(setTransactions, setIsLoading);
  }, [isUpdated]);
  /* eslint-enable */
  if (isLoading) {
    return <Loading />;
  }

  const toggleVisibility = () => {
    setIsCreatorVisible((prev) => !prev);
  };
  return (
    <MoneyContainer>
      <button className="create-list-btn" onClick={toggleVisibility}>
        {!isCreatorVisible ? (
          <p className="btn-text">
            New <TiArrowSortedDown />
          </p>
        ) : (
          <p className="btn-text">
            Close <TiArrowSortedUp />
          </p>
        )}
      </button>

      {isCreatorVisible && (
        <TransactionCreator
          setIsUpdated={setIsUpdated}
          setIsLoading={setIsLoading}
          setIsCreatorVisible={setIsCreatorVisible}
        />
      )}
      <SearchTransaction
        transactions={transactions}
        setTransactions={setTransactions}
        search={search}
        setSearch={setSearch}
      />
      <TransactionList
        setIsUpdated={setIsUpdated}
        transactions={transactions}
        search={search}
      />
    </MoneyContainer>
  );
};

export default Money;

const MoneyContainer = styled.div`
  display: flex;
  flex-direction: column;

  .create-list-btn {
    background: none;
    border: none;
    margin-top: 6px;
    font-weight: bold;

    .btn-text {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 10px;
    }
  }
`;
