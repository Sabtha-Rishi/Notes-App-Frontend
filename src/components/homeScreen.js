import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { RiTaskFill, RiTimer2Fill } from "react-icons/ri";
import { FaPiggyBank, FaClipboardList } from "react-icons/fa";
// import gif from "../media/home.gif";
import { HiArrowNarrowRight } from "react-icons/hi";
import AccountsAPI from "../api/accounts.api";
import { useNavigate } from "react-router-dom";

const HomeScreen = ({ user, setTab, setIsAuthenticated, setUser }) => {
  /* eslint-disable */

  const switchTab = (e) => {
    setTab(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    AccountsAPI.logout(setIsAuthenticated, setUser, navigate);
  };
  /* eslint-enable */

  return (
    <Home>
      <div className="user-details">
        <h2 className="welcome-title">Hi, {user.name} 👋🏻</h2>
      </div>
      {/* <img src={gif} className="gif" alt="" /> */}
      <div class="container">
        <button class="box" value="0" onClick={switchTab}>
          <RiTaskFill />
          Todo
        </button>
        <button class="box" value="1" onClick={switchTab}>
          <FaPiggyBank />
          Money
        </button>
        <button class="box" value="2" onClick={switchTab}>
          <RiTimer2Fill />
          Routine
        </button>
        <button class="box" value="3" onClick={switchTab}>
          <FaClipboardList />
          List
        </button>
      </div>
      <button class="logout" onClick={handleLogout}>
        Logout <HiArrowNarrowRight />
      </button>
      <p className="footer-branding">
        {" "}
        Made with <AiFillHeart />
        by Sabtha Rishi
      </p>
    </Home>
  );
};

export default HomeScreen;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  height: 100vh;
  margin: 50px auto;
  overflow: hidden;
  transition-duration: 0.4s;
  background-color: #fafafa;
  height: 80vh;
  background-color: #fff;
  border: 1px solid lighgrey;
  align-items: center;
  justify-content: center;

  .welcome-title {
    font-weight: bold;
    text-align: center;
    margin: auto;
  }

  .footer-branding {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-align: center;
    font-weight: bold;
    margin-top: auto;
    font-size: small;
  }
  .gif {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    margin: 0 auto;
  }
  .container {
    margin: 20px auto;
    width: 300px;
    height: 300px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: auto;

    .box {
      background-color: #f7f9fb;
      border: none;
      box-shadow: 10px 10px 25px #e3e3e3;
      padding: 20px;
      flex-direction: column;
      border-radius: 10px;
      color: #000;
      gap: 10px;
      display: flex;
      transition: transform 0.2s;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
    }
    .box:hover {
      transform: scale(1.1);
      background-color: #000;
      color: #fff;
    }
  }

  .logout {
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    color: #5397db;
    border: none;
    background: none;
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;
    }
  }
`;
