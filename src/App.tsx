import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './client/header';
import { HomePage } from './client/main';
import { Contacts } from './client/contacts';
import { AuthForm } from './client/authForm';
import { AuthProvider, useAuth } from './client/api/user';
import { UserPage } from './client/userpage';
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const App: FC = () => {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<AuthForm />} />
          {/* <Route path="/contacts" element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/user" element={
              <ProtectedRoute>
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
