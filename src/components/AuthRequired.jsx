import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./UserContext";

function AuthRequired({ children }) {
  const auth = useUserContext();
  console.log(auth);

  if (!auth.user) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

export default AuthRequired;
