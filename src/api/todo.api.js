import axios from "axios";
axios.defaults.withCredentials = true;

// const BASE_URL = "https://noote-api.herokuapp.com/";
const BASE_URL = "http://localhost:8000/";

const allTodos = async (setTodos, setIsLoading) => {
  try {
    const response = await axios.create().get(`${BASE_URL}todo/`);

    if (response.data.success) {
      setTodos(response.data.todos);
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

const updateTodo = async (
  setIsUpdated,
  setIsLoading,
  todoID,
  isCompleted,
  setIsCompleted
) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}todo/${todoID}/update`, {
        isCompleted: !isCompleted,
      });

    if (response.data.success) {
      setIsCompleted(!isCompleted);
      setIsUpdated((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't update todo");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const deleteTodo = async (setIsUpdated, setIsLoading, todoID, setIsDeleted) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}todo/${todoID}/update`, {
        isArchieved: true,
      });

    if (response.data.success) {
      setIsDeleted(true);
      setIsUpdated((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't update todo");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const createTodo = async (setIsUpdated, setIsLoading, data, setNewTask) => {
  try {
    const response = await axios.create().post(`${BASE_URL}todo/new`, data);

    if (response.data.success) {
      setIsUpdated((prev) => !prev);
      setNewTask("");
    }
    if (!response.data.success) {
      console.log("couldn't create todo");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const TodoAPI = {
  allTodos,
  updateTodo,
  deleteTodo,
  createTodo,
};

export default TodoAPI;
