import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../pages/loading";
import ListItem from "./listItem";
import ListAPI from "../api/list.api";

const AllLists = ({ isLoading, isUpdated, setIsLoading, setIsUpdated }) => {
  const [lists, setLists] = useState([]);
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
  console.log(lists);
  return (
    <TodoContainer>
      {lists.map((list) => {
        return <ListItem listID={list._id} key={list._id} />;
      })}
    </TodoContainer>
  );
};

export default AllLists;

const TodoContainer = styled.div``;
