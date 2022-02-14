import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    secret: "",
  });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupData);

    try {
      const result = await axios.post(
        "http://localhost:3001/api/user/signup",
        signupData
      );
      const data = result.data;
      console.log(data);
      navigate("/signin", { replace: true });
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
            value={signupData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={signupData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="secret">Secret</label>
          <input
            type="secret"
            name="secret"
            id="secret"
            value={signupData.secret}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
