import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const auth = useUserContext();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);

    try {
      const result = await axios.post(
        "http://localhost:3001/api/user/signin",
        loginData
      );
      const data = result.data;
      console.log(data);
      auth.login(data);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
        <div className="form-control">
          <Link to="/forget-password">Forget Password</Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
