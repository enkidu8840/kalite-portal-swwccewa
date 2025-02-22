import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  EyeIcon,
  DocumentDuplicateIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  ArrowUturnLeftIcon,
  TrashIcon,
  UsersIcon,
  TableCellsIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

const menuGroups = [
  {
    title: "Ana Sayfa",
    icon: HomeIcon,
    items: [{ path: "/", text: "Dashboard", icon: HomeIcon }],
  },
  {
    title: "Tedarik Zinciri",
    icon: ClipboardDocumentCheckIcon,
    items: [
      { path: "/supplier", text: "Tedarikçi Yönetimi", icon: ClipboardDocumentCheckIcon },
      { path: "/customer", text: "Müşteri Yönetimi", icon: UserGroupIcon },
    ],
  },
  {
    title: "Kalite Süreçleri",
    icon: DocumentTextIcon,
    items: [
      { path: "/documentation", text: "Dokümantasyon", icon: DocumentTextIcon },
      { path: "/audit", text: "Denetim", icon: ClipboardDocumentListIcon },
      { path: "/surveillance", text: "Gözetim", icon: EyeIcon },
      { path: "/df-process", text: "DF Süreci", icon: ChartBarIcon },
      { path: "/management-review", text: "YGG", icon: DocumentDuplicateIcon },
      { path: "/food-safety-team", text: "GG Ekip Yönetimi", icon: UsersIcon },
      { path: "/training", text: "Eğitim Süreci", icon: AcademicCapIcon },
    ],
  },
  {
    title: "Laboratuvar Süreçleri",
    icon: BeakerIcon,
    items: [
      { path: "/laboratory", text: "Genel Laboratuvar Yönetimi", icon: BeakerIcon },
      { path: "/lab/analysis-management", text: "Analiz Planını Yönet", icon: TableCellsIcon },
      { path: "/lab/analysis-matrix", text: "Analiz Planı Matrisi", icon: ChartBarIcon },
      { path: "/lab/enter-analysis-result", text: "Analiz Sonucu Gir", icon: ClipboardDocumentListIcon },
      { path: "/lab/upload-lab-report", text: "Dış Lab Raporu Yükle", icon: DocumentDuplicateIcon },
      { path: "/lab/internal-analysis", text: "İç Lab Analizleri Yönet", icon: EyeIcon },
      { path: "/lab/food-analysis-entry", text: "🍽️ Yemek Analizi Gir", icon: BeakerIcon },
    ],
  },
  {
    title: "Teknik Süreçler",
    icon: CogIcon,
    items: [
      { path: "/maintenance-process", text: "Bakım / Onarım Süreci", icon: WrenchScrewdriverIcon },
      { path: "/calibration-verification", text: "Kalibrasyon / Doğrulama", icon: BeakerIcon },
    ],
  },
  {
    title: "İSG ve Acil Durumlar",
    icon: ShieldCheckIcon,
    items: [
      { path: "/workplace-safety", text: "İş Sağlığı ve Güvenliği", icon: ShieldCheckIcon },
      { path: "/incident-emergency", text: "Olay ve Acil Durum Yönetimi", icon: ExclamationCircleIcon },
      { path: "/safety/near-miss-report", text: "⚠️ Ramak Kala Bildirim Formu", icon: ExclamationTriangleIcon },
    ],
  },
  {
    title: "Risk Yönetimi",
    icon: ExclamationTriangleIcon,
    items: [
      { path: "/recall", text: "Geri Çekme", icon: ArrowUturnLeftIcon },
      { path: "/potential-hazard", text: "Potansiyel Güvensiz Durum", icon: ExclamationTriangleIcon },
      { path: "/disposal", text: "İmha", icon: TrashIcon },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (title) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed top-0 left-0 overflow-y-auto shadow-lg relative">
      <div className="flex flex-col items-center justify-center py-4">
        <img
          src="https://yemekhane.com.tr/wp-content/uploads/2020/09/yemekhanelogo-1024x113.png"
          alt="Kalite Portalı"
          className="w-36 h-auto mb-3 object-contain"
        />
        <h2 className="text-xs font-bold flex items-center gap-2">
          <span className="text-blue-400">⚡</span> Kalite Yönetim Portalı
        </h2>
      </div>

      <nav className="p-4">
        {menuGroups.map((group) => (
          <div key={group.title} className="mb-2">
            <button
              onClick={() => toggleGroup(group.title)}
              className={twMerge(
                "w-full flex items-center justify-between p-2 text-sm font-medium",
                "text-gray-300 hover:bg-gray-800 rounded-md transition-all duration-200"
              )}
            >
              <div className="flex items-center gap-2">
                <group.icon className="w-5 h-5" />
                <span>{group.title}</span>
              </div>
              {openGroups[group.title] ? (
                <ChevronDownIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </button>

            {openGroups[group.title] && (
              <div className="ml-4 mt-1 space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={twMerge(
                      "flex items-center p-2 rounded-md transition-all duration-200 text-sm",
                      "hover:bg-gray-700 hover:text-blue-400",
                      location.pathname === item.path ? "bg-gray-800 text-blue-400 font-semibold" : "text-gray-400"
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    <span className="text-xs font-medium">{item.text}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Sidebar'ın en alt kısmına eklenen logo */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <img src="/sekiz.png" alt="Sekiz Logo" className="w-24 h-auto" />
      </div>
    </div>
  );
};

export default Sidebar;
