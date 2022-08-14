import React from "react";
import logo from "../media/noote dark.png";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  const toHome = () => {
    window.location.reload();
  };
  return (
    <HeaderContainer>
      <p className="footer-branding">
        {" "}
        Made with <AiFillHeart />
        by Sabtha Rishi
      </p>
      <div>
        <img className="logo" src={logo} alt="" onClick={toHome} />
        <div className="user-branding"></div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: center;
  max-height: 90px;
  min-width: 100vw;
  flex-wrap: nowrap;
  justify-content: center;
  overflow: hidden;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 100;

  .logo {
    width: 100px;
    cursor: pointer;
  }

  .footer-branding {
    background-color: white;
    width: 100vw;
    margin-top: 0;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 11px;
    padding: 5px 0;
    gap: 5px;
    font-weight: bold;
  }
`;
