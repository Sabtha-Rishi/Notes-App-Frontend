import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import TodoList from "../components/todoList";
import AccountsAPI from "../api/accounts.api";

const Home = ({ isAuthenticated, setIsAuthenticated }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    AccountsAPI.getUser(setIsAuthenticated, setUser, setIsLoading, navigate);
  }, []);

  useEffect(() => {
    if (!isAuthenticated & !isLoading) {
      navigate("/accounts/login");
    }
  }, [isAuthenticated]);

  return (
    <HomeContainer>
      <TodoList />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;
