import React, { useState } from "react";
import { UserAuthContext } from "./UserAuthContext";

function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <UserAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthContextProvider;