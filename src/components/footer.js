import React from "react";
import styled from "styled-components";

const Footer = ({ tab, setTab }) => {
  const switchTab = (e) => {
    setTab(e.target.value);
  };
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  min-width: 100%;
  background-color: #f7f9fb;
  position: fixed;
  justify-content: center;
  padding: 0;
  margin: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  right: 0;
  bottom: 0;
  margin-right: 10%;
  z-index: 100;
  

  .tabs {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    padding: 0 ;
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
  }
`;
