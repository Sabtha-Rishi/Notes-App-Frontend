import React from "react";
import styled from "styled-components";
import gif from "../media/loading.gif";

const loading = () => {
  return (
    <LoadingPage>
      <img src={gif} alt="" className="loader" />
    </LoadingPage>
  );
};

export default loading;

const LoadingPage = styled.div`
  min-width: 100vw;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 300px;
    margin: 0;
  }
`;
