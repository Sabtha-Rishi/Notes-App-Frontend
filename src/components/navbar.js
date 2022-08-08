import React from "react";
import styled from "styled-components";
import { TiPlus } from "react-icons/ti";

const navbar = () => {
  return (
    <NavContainer>
      <button className="new-btn">
        <TiPlus />
      </button>
    </NavContainer>
  );
};

export default navbar;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  height: 45px;
  border-radius: 5px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 5px;
  left: 0;
  max-height: 100vh;
  align-items: center;
  justify-content: center;

  .new-btn {
    display: flex;
    background: none;
    border: none;
    color: black;
    font-size: 30px;
    border-radius: 50px;
  }
`;
