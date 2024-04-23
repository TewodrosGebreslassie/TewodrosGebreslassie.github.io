import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import Login from "../login/Login";

export default function TokenNotFound() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-4">It seems your session has expired or you don't have access.</p>
        <p className="text-lg text-gray-700 mb-4">Please login again to continue.</p>

        <Login />
      </div>
    </div>
  );
}
