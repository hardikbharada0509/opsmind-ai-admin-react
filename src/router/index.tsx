import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FallbackRedirect from "./fallback";
import DashboardLayout from "../pages/dashboard/components/DashboardLayout";
import Login from "../pages/login/login";
import DashboardPage from "../pages/dashboard/dashboard";
import UploadPdf from "../pages/upload-pdf/UploadPdf";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Shared Layout Route: Prevents layout from unmounting when switching pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/upload-pdf" element={<UploadPdf />} />
        </Route>

        <Route path="*" element={<FallbackRedirect />} />
      </Routes>
    </Router>
  );
};
