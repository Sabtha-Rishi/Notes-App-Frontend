import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Loading from "./pages/loading";
import NavBar from "./components/navbar";
import Header from "./components/header";

import AccountsAPI from "./api/accounts.api";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AccountsAPI.isAuthenticated(setIsAuthenticated, setIsLoading);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              isAuthenticated={isAuthenticated}
              setIsAutenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          exact
          path="/accounts/login"
          element={
            <Login
              isAuthenticated={isAuthenticated}
              setIsAutenticated={setIsAuthenticated}
            />
          }
        />
        <Route exact path="/accounts/register" element={<Register />} />
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;
