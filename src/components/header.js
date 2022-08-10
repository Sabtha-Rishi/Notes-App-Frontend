import React from "react";
import styled from "styled-components";

const Header = ({ tab, setTab }) => {
  const switchTab = (e) => {
    setTab(e.target.value);
  };
  return (
    <HeaderContainer>
      <ul className="tabs">
        <button
          className={tab === "0" ? "tab active" : "tab"}
          value="0"
          onClick={switchTab}
        >
          {" "}
          Todo
        </button>
        <button
          className={tab === "1" ? "tab active" : "tab"}
          value="1"
          onClick={switchTab}
        >
          {" "}
          Money
        </button>

        <button
          className={tab === "2" ? "tab active" : "tab"}
          value="2"
          onClick={switchTab}
        >
          {" "}
          Track
        </button>
        <button
          className={tab === "3" ? "tab active" : "tab"}
          value="3"
          onClick={switchTab}
        >
          {" "}
          List
        </button>
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

  .active {
    border: 2px solid black;
    box-shadow: 1px 20px 25px #d9d9d9;
  }
`;
