import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [password, setPassword] = useState(null);
  const [forgetData, setforgetData] = useState({
    email: "",
    secret: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setforgetData({ ...forgetData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(forgetData);

    try {
      const result = await axios.post(
        "http://localhost:3001/api/user//forget-password",
        forgetData
      );
      const data = result.data;
      console.log(data);
      setPassword(data.password);

      // navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={forgetData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="secret">Secret</label>
            <input
              type="secret"
              name="secret"
              id="secret"
              value={forgetData.secret}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className="container">
        {password && <h1>Your password is {password}</h1>}
      </div>
    </>
  );
}

export default ForgetPassword;
