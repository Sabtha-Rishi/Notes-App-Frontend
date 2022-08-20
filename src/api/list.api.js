import axios from "axios";
axios.defaults.withCredentials = true;

// const BASE_URL = "http://localhost:8000/";
const BASE_URL = "https://plankton-app-smg2s.ondigitalocean.app/";

const allLists = async (setLists, setIsLoading) => {
  try {
    const response = await axios.create().get(`${BASE_URL}list/`);

    if (response.data.success) {
      setLists(response.data.lists);
    }
    if (!response.data.success) {
      console.log("couldn't fetch lists");
    }
  } catch (err) {
    console.log(err);
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const SingleList = async (setList, setTodos, setIsLoading, listID) => {
  console.log(listID);
  try {
    const response = await axios.create().get(`${BASE_URL}list/${listID}`);
    if (response.data.success) {
      setList(response.data.list);
      setTodos(response.data.todos);
    }
    if (!response.data.success) {
      console.log("couldn't fetch list");
      console.log(response.data);
    }
  } catch {
  } finally {
    setIsLoading(false);
  }
};

const createList = async (setIsUpdated, setIsLoading, data, setIsVisible) => {
  try {
    const response = await axios.create().post(`${BASE_URL}list/new`, data);
    if (response.data.success) {
      setIsUpdated((prev) => !prev);
      setIsVisible(false);
    }
    if (!response.data.success) {
      console.log("couldn't create list");
      console.log(response.data);
    }
  } catch {
  } finally {
    setIsLoading(false);
  }
};

const addToList = async (setIsUpdated, setIsLoading, data) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}list/add-todo`, data);
    if (response.data.success) {
      setIsUpdated((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't add todo to list");
      console.log(response.data);
    }
  } catch {
  } finally {
    setIsLoading(false);
  }
};

const deleteList = async (setIsUpdated, setIsLoading, listID) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}list/${listID}/update`, {
        isArchieved: true,
      });

    if (response.data.success) {
      setIsUpdated((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't delete list");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const ListAPI = {
  allLists,
  SingleList,
  deleteList,
  createList,
  addToList,
};

export default ListAPI;
