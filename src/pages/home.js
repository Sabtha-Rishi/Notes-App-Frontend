import React from "react";
import styled from "styled-components";
import TodoList from "../components/todoList";

const home = () => {
  return (
    <HomeContainer>
      <TodoList />
    </HomeContainer>
  );
};

export default home;

const HomeContainer = styled.div``;
