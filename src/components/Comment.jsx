import axios from "axios";
import React, { useState, useEffect } from "react";
import { useUserContext } from "./UserContext";

function Comment() {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  const { user, logout } = useUserContext();

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get("http://localhost:3001/api/comments");
        const data = result.data;
        console.log(data);
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const commentData = {
        message,
        userId: user._id,
      };

      console.log(commentData);

      const result = await axios.post(
        "http://localhost:3001/api/comments",
        commentData
      );
      const data = result.data;
      console.log(data);

      setComments([...comments, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3001/api/comments/${user._id}`
      );
      const data = result.data;
      setComments(data);
    } catch (error) {
      console.log(error);
    }
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

      <button
        onClick={(e) => {
          logout();
        }}
      >
        Logout
      </button>

      <button onClick={handleFilter}>Filter Button</button>
    </>
  );
}

export default Comment;
