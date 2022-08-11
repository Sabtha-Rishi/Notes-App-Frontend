import React from "react";
import logo from "../media/noote dark.png";
import styled from "styled-components";

const header = () => {
  return (
    <HeaderContainer>
      <img className="logo" src={logo} alt="" />
    </HeaderContainer>
  );
};

export default header;

const HeaderContainer = styled.div`
  display: flex;
  height: 35px;
  min-width: 100vw;
  background-color: black;
  padding: 10px;
  align-items: center;
  justify-content: center;
  position: sticky;
  top:0;

  .logo {
    width: 100px;
  }
`;
