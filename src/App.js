import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <NavBar
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          >
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={
                <LoginPage
                  isAuthLoading={isAuthLoading}
                  setIsAuthLoading={setIsAuthLoading}
                />
              }
            />
            <Route
              path="registration"
              element={
                <RegistrationPage
                  isAuthLoading={isAuthLoading}
                  setIsAuthLoading={setIsAuthLoading}
                />
              }
            />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
