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
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  padding:12px 0;
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
  }
`;
