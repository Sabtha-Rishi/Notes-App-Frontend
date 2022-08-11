import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "https://noote-api.herokuapp.com/";
// const BASE_URL = "http://localhost:8000/";

const allTransactions = async (setTransactions, setIsLoading) => {
  try {
    const response = await axios.create().get(`${BASE_URL}transaction/`);

    if (response.data.success) {
      setTransactions(response.data.transactions);
    }
    if (!response.data.success) {
      console.log("couldn't fetch transactions");
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

const createTransaction = async (
  setIsUpdated,
  setIsLoading,
  data,
  setIsCreatorVisible
) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}transaction/new`, data);

    if (response.data.success) {
      setIsUpdated((prev) => !prev);
      setIsCreatorVisible((prev) => !prev);
    }
    if (!response.data.success) {
      console.log("couldn't create transaction");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const TransactionAPI = {
  allTransactions,
  updateTodo,
  deleteTodo,
  createTransaction,
};

export default TransactionAPI;
