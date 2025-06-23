"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user, {
        withCredentials: true,
      });
      toast.success("Login successful!");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-2xl px-8 py-10 w-full max-w-md flex flex-col items-center">
        <h2 className="font-bold text-3xl mb-8 text-white tracking-wide">
          Login
        </h2>
        {loading ? (
          <div className="font-medium text-lg mb-8 text-purple-300 animate-pulse">
            Processing...
          </div>
        ) : (
          <>
            <label className="self-start mb-1 text-purple-200 font-semibold">
              Email:
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <label className="self-start mb-1 text-purple-200 font-semibold">
              Password:
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full px-4 py-3 mb-6 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <button
              onClick={onLogin}
              disabled={buttonDisabled || loading}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                buttonDisabled || loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 cursor-pointer"
              } text-white shadow-md`}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
