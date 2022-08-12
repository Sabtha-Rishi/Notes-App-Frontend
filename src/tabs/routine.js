import React, { useState } from "react";
import AllRoutines from "../components/allRoutines";

const Routine = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  return (
    <div>
      <AllRoutines
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
        user={user}
      />
    </div>
  );
};

export default Routine;
