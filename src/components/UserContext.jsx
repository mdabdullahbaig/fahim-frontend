import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
