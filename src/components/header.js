import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [tab, setTab] = useState(0);
  return (
    <HeaderContainer>
      <ul className="tabs">
        <button className="tab "> Todo</button>
        <button className="tab "> Money</button>
        <button className="tab "> Track</button>
        <button className="tab "> List</button>
      </ul>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  max-height: 90px;
  min-width: 100%;
  background-color: #f7f9fb;
  position: sticky;
  justify-content: center;
  padding: 0;
  margin: 0;
  top: 0;
  margin-right: 10%;
  z-index: 100;

  .tabs {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    padding: 0 5px;
    /* gap:3px; */
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
  }

  .tab {
    width: 100%;
    color: black;
    text-align: center;
    justify-content: center;
    padding: 20px;
    border: none;
    background: none;
  }

  .tab:focus {
    border: 2px solid black;
    box-shadow: 10px 20px 20px #e3e3e3;
  }
`;
