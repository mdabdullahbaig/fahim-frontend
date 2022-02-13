import axios from "axios";
import React, { useState, useEffect } from "react";
import { useUserContext } from "./UserContext";

function Comment() {
  const [comments, setComments] = useState([]);
  useEffect(async () => {
    const res = await axios.get("/api/comments");
    console.log(res.data);
    setComments(res.data);
  }, []);

  const [user, setUser] = useUserContext();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      message,
      userId: user._id,
    };

    console.log(data);

    const res = await axios.post("/api/comments", data);
    console.log(res);
  };

  const handleFilter = async () => {
    const res = await axios.get(`/api/comments/${user._id}`);
    setComments(res.data);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="message">Comment</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="form-control">
            <button type="submit">Submit</button>
          </div>
        </form>

        <ul>
          <li>{user.email}</li>
          <li>{user.password}</li>
          <li>{user.secret}</li>
        </ul>
      </div>

      <div>
        {comments.map((comment) => {
          return (
            <div key={comment._id}>
              <h4>{comment.userId.email}</h4>
              <p>{comment.message}</p>
            </div>
          );
        })}
      </div>

      <button onClick={handleFilter}>Filter Button</button>
    </>
  );
}

export default Comment;
