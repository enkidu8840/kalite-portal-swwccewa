import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  DocumentTextIcon,
  BeakerIcon,
  ClipboardDocumentListIcon,
  EyeIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  ArrowUturnLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const userRole = localStorage.getItem("userRole") || "Misafir";

  const roleBasedMenu = {
    Admin: "all",
    "Kalite Müdürü": ["/audit", "/training", "/management-review", "/disposal", "/laboratory"],
    "Kalite Müdür Yardımcısı": ["/audit", "/training", "/laboratory"],
    "Kalite Uzmanı": ["/audit", "/laboratory"],
    "İşletme Müdürü": ["/supplier", "/customer", "/documentation", "/management-review"],
  };

  const allMenus = [
    { path: "/dashboard", text: "Dashboard", icon: HomeIcon },
    { path: "/supplier", text: "Tedarikçi Yönetimi", icon: ClipboardDocumentCheckIcon },
    { path: "/customer", text: "Müşteri Yönetimi", icon: UsersIcon },
    { path: "/documentation", text: "Dokümantasyon", icon: DocumentTextIcon },
    { path: "/audit", text: "Denetim", icon: ClipboardDocumentListIcon },
    { path: "/surveillance", text: "Gözetim", icon: EyeIcon },
    { path: "/df-process", text: "DF Süreci", icon: ChartBarIcon },
    { path: "/management-review", text: "YGG", icon: DocumentDuplicateIcon },
    { path: "/food-safety-team", text: "GG Ekip Yönetimi", icon: UsersIcon },
    { path: "/training", text: "Eğitim Süreci", icon: AcademicCapIcon },
    { path: "/laboratory", text: "Laboratuvar", icon: BeakerIcon },
    { path: "/workplace-safety", text: "İş Sağlığı ve Güvenliği", icon: ShieldCheckIcon },
    { path: "/incident-emergency", text: "Olay ve Acil Durum Yönetimi", icon: ExclamationCircleIcon },
    { path: "/recall", text: "Geri Çekme", icon: ArrowUturnLeftIcon },
    { path: "/potential-hazard", text: "Potansiyel Güvensiz Durum", icon: ExclamationTriangleIcon },
    { path: "/disposal", text: "İmha", icon: TrashIcon },
  ];

  const filteredMenus = userRole === "Admin"
    ? allMenus
    : allMenus.filter(menu => roleBasedMenu[userRole]?.includes(menu.path));

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed top-0 left-0 shadow-lg">
      <div className="p-4">
        {filteredMenus.map((menu, index) => (
          <Link key={index} to={menu.path} className="block p-3 text-gray-300 hover:bg-gray-700 rounded-md">
            <menu.icon className="w-5 h-5 inline-block mr-2" />
            {menu.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
