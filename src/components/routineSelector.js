import React from "react";
import styled from "styled-components";
const RoutineSelector = ({ routines, setRoutineId, routine }) => {
  const ROUTINES_DATA = {};
  /* eslint-disable */

  routines.map((tempRoutine) => {
    ROUTINES_DATA[tempRoutine.name] = tempRoutine._id;
  });

  console.log(ROUTINES_DATA);

  const onChange = (e) => {
    setRoutineId(ROUTINES_DATA[e.target.value]);
    console.log(routine);
  };
  /* eslint-enable */

  return (
    <Selector>
      <form>
        <select className="routine" name="routine" onChange={onChange}>
          {routines.map((routine) => {
            return (
              <option className="input-option" name="category">
                {routine.name}
              </option>
            );
          })}
        </select>
      </form>
    </Selector>
  );
};

export default RoutineSelector;

const Selector = styled.div`
  .routine {
    background: none;
    outline: none;
    display: flex;
    width: 150px;
    height: 30px;
    border: none;
    color: #5397db;
    text-transform: capitalize;
  }
`;
