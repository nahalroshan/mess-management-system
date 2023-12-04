import react, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./UserAuthContext";
import Login from "./login";
import Register from "./register";
import app from "./firebase";
import Home from "./home/home";
import Rate from "./home/rate";
import Menu from "./home/Menu";
import Attendance from "./home/Attendance";
import First from "./First";
import Admin from "./Admin";
import AdminDash from "./admin/AdminDash";
import AdminHome from "./admin/AdminHome";
import AdminAttendance from "./admin/AdminAttendance";
import AdminNav from "./admin/AdminNav";
import AdminMenu from "./admin/AdminMenu";
import AdminMesscut from "./admin/AdminMesscut";
import AdminFeedback from "./admin/AdminFeedback";

function App() {
  return (
    <div className="app">
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<First />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admindashboard" element={<AdminDash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/rate" element={<Rate />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/adminattendance" element={<AdminAttendance />} />
            <Route path="/adminnav" element={<AdminNav />} />
            <Route path="/adminmenu" element = {<AdminMenu />} />
            <Route path="/adminmesscut" element = {<AdminMesscut />} />
            <Route path="/adminfeedback" element = {<AdminFeedback />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
