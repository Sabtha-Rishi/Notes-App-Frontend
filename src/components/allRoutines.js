import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../pages/loading";
import RoutineAPI from "../api/routine.api";
import RoutineItem from "../components/routineItem";

import RoutineCreator from "../components/routineCreator";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const AllRoutines = ({
  isLoading,
  isUpdated,
  setIsLoading,
  setIsUpdated,
  user,
}) => {
  const [routines, setRoutines] = useState([]);
  const [isCreatorVisible, setIsCreatorVisible] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    setIsLoading(true)
    RoutineAPI.allRoutines(setRoutines, setIsLoading);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    RoutineAPI.allRoutines(setRoutines, setIsLoading);
  }, [isUpdated]);
  /* eslint-enable */
  const toggleVisibility = () => {
    setIsCreatorVisible((prev) => !prev);
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <RoutineContainer>
      <button className="create-list-btn" onClick={toggleVisibility}>
        {!isCreatorVisible ? (
          <p className="btn-text">
            New <TiArrowSortedDown />
          </p>
        ) : (
          <p className="btn-text">
            Close <TiArrowSortedUp />
          </p>
        )}
      </button>

      {isCreatorVisible && (
        <RoutineCreator
          setIsUpdated={setIsUpdated}
          setIsLoading={setIsLoading}
          setIsCreatorVisible={setIsCreatorVisible}
        />
      )}
      <RoutineItem
        routines={routines}
        user={user}
        setIsUpdated={setIsUpdated}
        isUpdated={isUpdated}
      />
    </RoutineContainer>
  );
};

export default AllRoutines;

const RoutineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;
