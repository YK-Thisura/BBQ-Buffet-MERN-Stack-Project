import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    // Hardcoded admin and staff credentials
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin12345";

    const staffEmail = "staff@gmail.com";
    const staffPassword = "staff12345";

    // Check for admin credentials
    if (data.email === adminEmail && data.password === adminPassword) {
      // Simulate setting a token and redirecting to the admin dashboard
      setToken("admin_fake_token");
      localStorage.setItem("token", "admin_fake_token");
      setShowLogin(false);
      window.location.href = "http://localhost:5174"; // Redirect to the admin dashboard
      return;
    }

    // Check for staff credentials
    if (data.email === staffEmail && data.password === staffPassword) {
      // Simulate setting a token and redirecting to the staff dashboard
      setToken("staff_fake_token");
      localStorage.setItem("token", "staff_fake_token");
      setShowLogin(false);
      window.location.href = "http://localhost:5175"; // Redirect to the staff dashboard
      return;
    }

    // Regular user login flow
    try {
      const response = await axios.post(`${url}/api/user/login`, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);

        // Redirect to user dashboard or homepage
        window.location.href = "/dashboard";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error: ", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState !== "Login" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I accept and consent to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
