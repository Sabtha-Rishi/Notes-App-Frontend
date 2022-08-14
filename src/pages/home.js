import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Todo from "../tabs/todo";
import List from "../tabs/list";
import Money from "../tabs/money";
import Routine from "../tabs/routine";

import AccountsAPI from "../api/accounts.api";
import Footer from "../components/footer";
import HomeScreen from "../components/homeScreen";

const Home = ({ isAuthenticated, setIsAuthenticated }) => {
  const [tab, setTab] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const TABS_DATA = [<Todo />, <Money />, <Routine user={user} />, <List />];
  /* eslint-disable */

  useEffect(() => {
    AccountsAPI.getUser(setIsAuthenticated, setUser, setIsLoading, navigate);
  }, []);

  useEffect(() => {
    if (!isAuthenticated & !isLoading) {
      navigate("/accounts/login");
    }
  }, [isAuthenticated]);

  /* eslint-enable */
  return (
    <HomeContainer>
      <Footer tab={tab} setTab={setTab} />

      {tab === "" ? (
        <HomeScreen
          user={user}
          setTab={setTab}
          setIsAuthenticated={setIsAuthenticated}
        />
      ) : (
        TABS_DATA[parseInt(tab)]
      )}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;
