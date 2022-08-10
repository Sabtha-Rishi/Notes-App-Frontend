import React, { useState } from "react";
import AllLists from "../components/allLists";

const Lists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  return (
    <div>
      {/* <TodoCreator setIsUpdated={setIsUpdated} setIsLoading={setIsLoading} /> */}
      <AllLists
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
      />
    </div>
  );
};

export default Lists;
