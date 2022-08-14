import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:8000/";
// const BASE_URL = "https://noote-api.herokuapp.com/";

const allRoutines = async (setRoutines, setIsLoading) => {
  try {
    const response = await axios.create().get(`${BASE_URL}routine/`);

    if (response.data.success) {
      setRoutines(response.data.routines);
    }
    if (!response.data.success) {
      console.log("couldn't fetch routines");
    }
  } catch (err) {
    console.log(err);
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const SingleRoutine = async (setRoutine, setTodos, setIsLoading, routineID) => {
  try {
    const response = await axios
      .create()
      .get(`${BASE_URL}routine/${routineID}`);
    if (response.data.success) {
      setRoutine(response.data.routine);
      setTodos(response.data.tasks);
    }
    if (!response.data.success) {
      console.log("couldn't fetch routine");
      console.log(response.data);
    }
  } catch {
  } finally {
    setIsLoading(false);
  }
};

const createRoutine = async (
  setIsUpdated,
  setIsLoading,
  data,
  setIsVisible
) => {
  try {
    const response = await axios.create().post(`${BASE_URL}routine/new`, data);
    if (response.data.success) {
      setIsUpdated((prev) => !prev);
      setIsVisible(false);
    }
    if (!response.data.success) {
      console.log("couldn't create routine");
      console.log(response.data);
    }
  } catch {
  } finally {
    setIsLoading(false);
  }
};

const addToRoutine = async (setIsUpdated, setIsLoading, data) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}routine/add-todo`, data);
    if (response.data.success) {
      setIsUpdated((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't add todo to routine");
      console.log(response.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

const deleteRoutine = async (setIsUpdated, setIsLoading, routineID) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}routine/${routineID}/update`, {
        isArchieved: true,
      });

    if (response.data.success) {
      setIsUpdated((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't delete routine");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const setDefault = async (setIsUpdated, setIsLoading, routineID) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}routine/${routineID}/set-default`);

    if (response.data.success) {
      setIsUpdated((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't set as default");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const reset = async (setIsUpdated, setIsLoading, routineID) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}routine/${routineID}/reset`);

    if (response.data.success) {
      setIsUpdated((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't reset routine");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const RoutineAPI = {
  allRoutines,
  reset,
  SingleRoutine,
  deleteRoutine,
  createRoutine,
  addToRoutine,
  setDefault,
};

export default RoutineAPI;
