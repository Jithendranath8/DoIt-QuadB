import { useState } from 'react';
import useAuthStore from '../store/AuthStore';
import { useNavigate } from 'react-router-dom';
import LoginInfo from './LoginInfo';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email)) {
      navigate('/home'); // Redirects to '/home' if login is successful
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <LoginInfo/>
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-900">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-indigo-900 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-indigo-900 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              required
            />
          </div>
          <button type="submit" className="w-full py-2.5 bg-blue-500 text-white">
            Login
          </button>
        </form>
        <p className="text-center text-gray-300 mt-4">Use above Mock Credentials</p>
      </div>
    </div>
  );
}

export default Login;
