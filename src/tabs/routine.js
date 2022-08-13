import React, { useState } from "react";
import AllRoutines from "../components/allRoutines";

import styled from "styled-components";

const Routine = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);


  
  return (
    <RoutineContainer>
     

      <AllRoutines
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
        user={user}
      />
    </RoutineContainer>
  );
};

export default Routine;

const RoutineContainer = styled.div`
  display: flex;
  flex-direction: column;
  .create-list-btn {
    background: none;
    border: none;
    margin-top: 6px;
    font-weight: bold;

    .btn-text {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 10px;
    }
  }
`;
