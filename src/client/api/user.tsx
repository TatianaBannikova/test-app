import { createContext, FC, useContext, useState } from "react";

interface User {
  username: string;
}
interface AuthProps {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthProps | undefined>(undefined);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (username: string) => {
    const newUser = {username};
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  }
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  }
  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error ('useAuth must be used within an AuthProvider');
  return context;
};
