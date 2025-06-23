"use client";
import React from "react";

const Profile = ({ params }: any) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-6">Profile Page</h1>
        <h2 className="text-2xl text-green-400 bg-gray-800 px-6 py-3 rounded-lg shadow text-center">
          Profile of {params.id}
        </h2>
      </div>
    </div>
  );
};

export default Profile;
