import React from "react";
import { Register, Login, LandingPage, Profile } from "./Components/components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router> {/* ✅ Wrap everything inside <Router> */}
      <div className="w-full h-lvh py-4 flex justify-center items-center">
        
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
