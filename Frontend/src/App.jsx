import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log({ authUser });
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={
              authUser ? (
                <Courses />
              ) : (
                <Navigate to="https://new-bookstore-app-backend-hjhc.onrender.com/signup" />
              )
            }
          />
          <Route
            path="https://new-bookstore-app-backend-hjhc.onrender.com/signup"
            element={<SignUp />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
