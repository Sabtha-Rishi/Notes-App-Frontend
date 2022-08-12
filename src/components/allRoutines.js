import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../pages/loading";
import RoutineAPI from "../api/routine.api";
import RoutineItem from "../components/routineItem";

const AllRoutines = ({
  isLoading,
  isUpdated,
  setIsLoading,
  setIsUpdated,
  user,
}) => {
  const [routines, setRoutines] = useState([]);
  /* eslint-disable */
  useEffect(() => {
    RoutineAPI.allRoutines(setRoutines, setIsLoading);
  }, []);

  useEffect(() => {
    RoutineAPI.allRoutines(setRoutines, setIsLoading);
  }, [isUpdated]);
  /* eslint-enable */
  if (isLoading) {
    return <Loading />;
  }

  return (
    <RoutineContainer>
      <RoutineItem routines={routines} user={user} />
    </RoutineContainer>
  );
};

export default AllRoutines;

const RoutineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;
