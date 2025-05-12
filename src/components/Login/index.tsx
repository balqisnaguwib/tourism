import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

// Others
import { login } from '@/stores/auth';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { push } = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      dispatch(
        login({
          username: username,
        })
      );
      push('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7fcfa]">
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-10 shadow-lg">
        {/* Logo Section */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-1 flex items-center">
            <div className="mr-2 flex h-12 w-12 items-center justify-center rounded bg-orange-600">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="4,4 20,12 4,20" fill="white" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-blue-800">Nomad.AI</span>
          </div>
        </div>
        {/* Form Section */}
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded border border-gray-200 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded border border-gray-200 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-center text-sm text-red-500">{error}</div>}
          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-blue-700 py-2 font-semibold text-white transition hover:bg-blue-800"
          >
            SIGN IN
            <span className="ml-2">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;