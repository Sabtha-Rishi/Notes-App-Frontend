import React from "react";
import styled from "styled-components";

const ProgressBar = ({ todos }) => {
  let completed = 0;
  /* eslint-disable */

  todos.map((todo) => {
    if (todo.isCompleted) {
      completed = completed + 1;
    }
  });
  /* eslint-enable */

  return (
    <Bar>
      <progress className="progress-bar" value={completed} max={todos.length} />
    </Bar>
  );
};

export default ProgressBar;

const Bar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;

  .progress-bar {
    width: 100%;
    height: 30px;
  }
`;
