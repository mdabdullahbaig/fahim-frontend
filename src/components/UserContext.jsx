import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider(props) {
  const [user, setUser] = useState({
    email: "fahim@gmail.com",
    password: "Fahim",
    secret: "F123",
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const [user, setUser] = useContext(UserContext);

  return [user, setUser];
}
