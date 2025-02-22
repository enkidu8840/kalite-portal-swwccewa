import React from "react";
import { useNavigate } from "react-router-dom";
import { BellIcon, ArrowPathIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user")) || { name: "Misafir", email: "", role: "ofis" };
  const department = localStorage.getItem("department") || "Departman Bilinmiyor";
  const company = localStorage.getItem("company"); // İşletme çalışanı için işletme adı

  // Kullanıcının işletme çalışanı olup olmadığını kontrol edelim
  const isBusinessEmployee = storedUser.role === "işletme";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("department");
    localStorage.removeItem("company");
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-[19rem] right-4 w-[calc(100%-20rem)] h-16 bg-gray-800 text-gray-300 shadow-md px-6 flex items-center justify-between z-50 border-b border-gray-700 transition-all">
      {/* Sol Kısım - İşletme Adı veya Departman Adı */}
      <div className="text-gray-300 font-semibold text-sm">
        {isBusinessEmployee ? company || "İşletme Bilinmiyor" : department}
      </div>

      {/* Sağ Kısım - Bildirim, Yenile ve Kullanıcı Avatarı */}
      <div className="flex items-center gap-6">
        {/* Bildirim Simgesi */}
        <div className="relative cursor-pointer">
          <BellIcon className="w-6 h-6 text-gray-400 hover:text-gray-200" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
        </div>

        {/* Yenile Simgesi */}
        <ArrowPathIcon className="w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer" />

        {/* Kullanıcı Bilgileri */}
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircleIcon className="w-8 h-8 text-gray-400" />
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-gray-200">{storedUser.name}</p>
            <p className="text-xs text-gray-400">{storedUser.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
