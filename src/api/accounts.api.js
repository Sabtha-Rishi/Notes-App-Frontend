import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "https://plankton-app-smg2s.ondigitalocean.app/";
// const BASE_URL = "http://localhost:8000/";

const register = async (newUser, setIsAuthenticated, setIsLoading) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}accounts/register/`, newUser, {});
    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
    }
  } catch (err) {
    console.log(err.message);
    setIsAuthenticated(false);
  } finally {
    setIsLoading(false);
  }
};

const login = async (data, setIsAuthenticated, setIsLoading) => {
  try {
    const response = await axios
      .create()
      .post(`${BASE_URL}accounts/login/`, data);

    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
      console.log("Success");
    }
  } catch (err) {
    setIsAuthenticated(false);
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const logout = async (setIsAuthenticated, setUser, navigate) => {
  try {
    const response = await axios.create().post(`${BASE_URL}accounts/logout/`);

    if (response.data.success) {
      setIsAuthenticated(false);
      setUser({});
      navigate("accounts/login");
    }
    if (!response.data.isSuccess) {
      setIsAuthenticated(true);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const getUser = async (setIsAuthenticated, setUser, setIsLoading, navigate) => {
  console.log(setIsAuthenticated, "test");
  try {
    const response = await axios.create().get(`${BASE_URL}accounts/user/`);
    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
      setUser(response.data.user);
      console.log(response);

      console.log("fetch-done", response.data);
    }
    if (!response.data.isAuthenticated) {
      setIsAuthenticated(false);
      console.log(response);
      console.log("fetch-fail", response.data);
      navigate("accounts/login");
    }
  } catch (err) {
    console.log(err.message);
    setIsAuthenticated(false);
    navigate("accounts/login");
  } finally {
    setIsLoading(false);
    console.log("called");
  }
};

const isAuthenticated = async (setIsAuthenticated, setIsLoading) => {
  try {
    const response = await axios.create().get(`${BASE_URL}accounts/user/`);
    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
    }
    if (!response.data.isAuthenticated) {
      setIsAuthenticated(false);
      console.log("auth Fail", response.data);
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const AccountsAPI = {
  register,
  login,
  getUser,
  logout,
  isAuthenticated,
};

export default AccountsAPI;
