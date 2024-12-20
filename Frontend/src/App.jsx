import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
