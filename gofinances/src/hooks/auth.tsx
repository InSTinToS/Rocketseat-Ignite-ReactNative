import React, { createContext, ReactNode, useContext } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextType {
  user: User;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: { email: "", id: "", name: "" },
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = {
    id: "1",
    name: "Miguel",
    email: "miguelandradebarreto2@gmail.com",
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
