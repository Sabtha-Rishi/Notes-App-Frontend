import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../pages/loading";
import ListItem from "./listItem";
import ListAPI from "../api/list.api";
import ListCreator from "./listCreator";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const AllLists = ({ isLoading, isUpdated, setIsLoading, setIsUpdated }) => {
  const [lists, setLists] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    ListAPI.allLists(setLists, setIsLoading);
  }, []);

  useEffect(() => {
    ListAPI.allLists(setLists, setIsLoading);
  }, [isUpdated]);
  /* eslint-enable */
  if (isLoading) {
    return <Loading />;
  }

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  console.log(lists);
  return (
    <TodoContainer>
      <button className="create-list-btn" onClick={toggleVisibility}>
        {isVisible ? (
          <p className="btn-text">
            New <TiArrowSortedDown />
          </p>
        ) : (
          <p className="btn-text">
            Close <TiArrowSortedUp />
          </p>
        )}
      </button>
      {!isVisible && (
        <div className="new-list">
          <ListCreator
            setIsUpdated={setIsUpdated}
            setIsLoading={setIsLoading}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
          />
        </div>
      )}
      {lists.map((list) => {
        return <ListItem listID={list._id} key={list._id} />;
      })}
    </TodoContainer>
  );
};

export default AllLists;

const TodoContainer = styled.div`
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
