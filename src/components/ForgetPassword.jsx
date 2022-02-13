import React, { useState } from "react";

function ForgetPassword() {
  const [data, setData] = useState({
    email: "",
    secret: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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

export default ForgetPassword;
