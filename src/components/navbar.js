import React from "react";
import styled from "styled-components";
import { TiPlus } from "react-icons/ti";
// import {FaUserAlt} from 'react-icons/fa'
// import {RiSettings3Fill} from 'react-icons/ri'

const navbar = () => {
  return (
    <NavContainer>
      <div className="btn-list">
        {/* <button className="btn-sub ">
          <RiSettings3Fill />
        </button> */}

        <button className="new-btn">
          <TiPlus />
        </button>

        {/* <button className="btn-sub ">
          <FaUserAlt />
        </button> */}
      </div>
    </NavContainer>
  );
};

export default navbar;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
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

  .btn-list {
    display: flex;
    gap: 70px;
    align-items: center;

  }
  .new-btn {
    display: flex;
    background: none;
    border: none;
    color: black;
    font-size: 30px;
    border-radius: 50px;
  }
  .btn-sub {
    display: flex;
    background: none;
    border: none;
    color: black;
    font-size: 20px;
    border-radius: 50px;
  }
`;
