import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const res = await axios.post("/api/user/signin", data);
    console.log(res.data);
    setUser(res.data);
    navigate("/");
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
