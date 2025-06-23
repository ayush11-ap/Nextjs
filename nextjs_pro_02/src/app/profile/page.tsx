"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";

export const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    try {
      const res = await axios.post(
        "/api/users/me",
        {},
        {
          withCredentials: true,
        }
      );
      setData(res.data.data?._id || "nothing");
      toast.success("User data fetched");
    } catch (error: any) {
      toast.error(error?.message || "Error fetching user data");
    }
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout", {
        withCredentials: true,
      });
      toast.success("logout success");
      router.push("/login");
    } catch (error: any) {
      toast.error(error?.message || "Logout error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-6">Profile Page</h1>
        <div className="mb-4 w-full text-center">
          {data === "nothing" ? (
            <span className="text-gray-400">No Data</span>
          ) : (
            <>
              <span className="text-green-400">{data}</span>
              <div className="mt-2">
                <Link
                  href={`/profile/${data}`}
                  className="text-blue-400 underline hover:text-blue-300 transition"
                >
                  Go to Profile Details
                </Link>
              </div>
            </>
          )}
        </div>
        <button
          onClick={logout}
          className="w-full py-2 px-4 mb-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
        >
          Logout
        </button>
        <button
          onClick={getUserDetails}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Fetch User Details
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
