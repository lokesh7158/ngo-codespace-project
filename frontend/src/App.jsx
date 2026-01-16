import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import RegistrationForm from "./pages/RegistrationForm";
import Donation from "./pages/Donation";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user" element={
          <ProtectedRoute role="USER">
            <UserDashboard />
          </ProtectedRoute>
        } />

        <Route path="/admin" element={
          <ProtectedRoute role="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/ngo-registration" element={
          <ProtectedRoute role="USER">
            <RegistrationForm />
          </ProtectedRoute>
        } />

        <Route path="/donate" element={
          <ProtectedRoute role="USER">
            <Donation />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}
