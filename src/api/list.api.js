import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:8000/";
// const BASE_URL = "https://noote-api.herokuapp.com/";

const allLists = async (setLists, setIsLoading) => {
  try {
    const response = await axios.create().get(`${BASE_URL}list/`);

    if (response.data.success) {
      setLists(response.data.lists);
    }
    if (!response.data.success) {
      console.log("couldn't fetch todos");
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

const ListAPI = {
  allLists,
  SingleList,
  createList,
};

export default ListAPI;
