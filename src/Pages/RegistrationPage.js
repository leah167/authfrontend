import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../Auth";

const RegistrationPage = ({ isAuthLoading, setIsAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      RegistrationPage
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            const newUserName = event.target.value;
            setUsername(newUserName);
          }}
        ></input>

        <br />
        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => {
            const newPassword = event.target.value;
            setPassword(newPassword);
          }}
        ></input>

        <br />
        <br />

        <button
          id="signup"
          type="submit"
          onClick={async () => {
            setIsAuthLoading(true);
            const isUserRegistered = await registerUser(username, password);
            if (isUserRegistered) {
              const isUserLoggedIn = await loginUser(username, password);
              console.log("user registered");
              if (isUserLoggedIn) {
                setIsAuthLoading(false);
                console.log("user Logged In");
                navigate("/");
              }
            }
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
