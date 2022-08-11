import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Todo from "../tabs/todo";
import List from "../tabs/list";
import Money from "../tabs/money";

import AccountsAPI from "../api/accounts.api";
import Footer from "../components/footer";

const Home = ({ isAuthenticated, setIsAuthenticated }) => {
  const [tab, setTab] = useState("");
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const TABS_DATA = [<Todo />, <Money />, "Trackers", <List />];

  console.log(TABS_DATA[tab]);
  /* eslint-disable */

  useEffect(() => {
    AccountsAPI.getUser(setIsAuthenticated, setUser, setIsLoading, navigate);
  }, []);

  useEffect(() => {
    if (!isAuthenticated & !isLoading) {
      navigate("/accounts/login");
    }
  }, [isAuthenticated]);

  console.log(user);
  /* eslint-enable */
  return (
    <HomeContainer>
      <Footer tab={tab} setTab={setTab} />
      {TABS_DATA[parseInt(tab)]}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;
