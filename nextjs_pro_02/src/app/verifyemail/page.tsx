"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export const VerifyEmailPage = () => {
  // const router = useRouter();

  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      setError(false);
    } catch (error: any) {
      setError(true);
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    setError(false);
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");

    // const { query } = router;
    // const urlTokenTwo = query.token;
  }, []);

  useEffect(() => {
    setError(false);
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-2xl px-8 py-10 w-full max-w-md flex flex-col items-center">
        <h2 className="font-bold text-3xl mb-8 text-white tracking-wide">
          Verify Email
        </h2>
        <div className="mb-8 w-full flex flex-col items-center">
          <span className="text-purple-400 font-semibold text-lg mb-2">
            Token:
          </span>
          <span className="break-all px-4 py-2 rounded-lg bg-gray-900 text-purple-200 border border-purple-700 shadow-inner text-center text-sm font-mono">
            {token || "No token found"}
          </span>
        </div>
        <div
          className={`w-full flex flex-col items-center rounded-xl p-6 ${
            verified
              ? "bg-green-900/80 border border-green-500 shadow-green-700"
              : error
              ? "bg-red-900/80 border border-red-500 shadow-red-700"
              : "bg-gray-700/80 border border-gray-600"
          }`}
        >
          {verified ? (
            <>
              <h2 className="text-2xl font-bold text-green-300 mb-4">
                Verified
              </h2>
              <Link
                href="/profile"
                className="inline-block mt-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow-md transition-colors duration-200"
              >
                Go to Profile
              </Link>
            </>
          ) : error ? (
            <h2 className="text-2xl font-bold text-red-300">
              Error verifying token
            </h2>
          ) : (
            <h2 className="text-2xl font-bold text-gray-300">Verifying...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
