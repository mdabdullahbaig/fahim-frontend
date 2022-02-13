import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext";

function Signup() {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    secret: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    navigate("/signin");

    const res = await axios.post("/api/user/signup", data);
    console.log(res.data);
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
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="secret">Secret</label>
          <input
            type="secret"
            name="secret"
            id="secret"
            value={data.secret}
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