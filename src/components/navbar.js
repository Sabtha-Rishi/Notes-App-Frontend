import React from "react";
import styled from "styled-components";

const navbar = () => {
  return (
    <NavContainer>{/* <button className="new-btn"></button> */}</NavContainer>
  );
};

export default navbar;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 45px;
  border-radius: 5px;
  margin: 10px 10px;
  bottom: 0;
  position: fixed;
`;
