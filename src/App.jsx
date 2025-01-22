import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import {HomePage} from './components/HomePage';
import { Login } from './components/Login';
import useAuthStore from './store/AuthStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={isAuthenticated ? <HomePage />: <Navigate to='/'/>} />
    </Routes>
  );
}

export default App;