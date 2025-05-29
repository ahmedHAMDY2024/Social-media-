import React, { createContext, useContext } from "react";

export const UserAuthContext = createContext();

export function useAuth() {
  return useContext(UserAuthContext);
}