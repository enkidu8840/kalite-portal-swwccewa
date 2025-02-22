import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole") || "Misafir";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
    window.location.reload(); // Sayfayı zorla yenile
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold">📌 Kalite Yönetim Portalı</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">{userRole}</span>
        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">
          Çıkış Yap
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
