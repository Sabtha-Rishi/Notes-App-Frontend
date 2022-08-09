import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loading from "../pages/loading";
import { HiArrowNarrowRight } from "react-icons/hi";

import AccountsAPI from "../api/accounts.api";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginData = {
    email: email,
    password: password,
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    AccountsAPI.login(loginData, setIsAuthenticated, setIsLoading);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <LoginForm>
      <h2 className="title">Hey, hi</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="input"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type="submit" className="login-btn" onSubmit={handleSubmit}>
          Login <HiArrowNarrowRight />
        </button>
      </form>
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-height: 80vh;
  gap: 30px;

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input {
    border-radius: 7px;
    height: 40px;
    width: 500px;
    border: 2px solid black;
  }
  .title {
    font-weight: bold;
  }

  .login-btn {
    background-color: white;
    border: none;
    border-radius: 7px;
    height: 40px;
    color: #5397db;
    font-weight: bold;
  }

  .input:focus {
    padding-left: 10px;
    font-weight: bold;
  }

  .input:placeholder-shown {
    padding-left: 10px;
  }

  @media only screen and (max-width: 600px) {
    .input {
      width: 80vw;
    }
  }
`;
