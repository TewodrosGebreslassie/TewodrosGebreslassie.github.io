import React from "react";
import { Link } from "react-router-dom";

export default function TokenNotFound() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-4">It seems your session has expired or you don't have access.</p>
        <p className="text-lg text-gray-700 mb-4">Please login again to continue.</p>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
