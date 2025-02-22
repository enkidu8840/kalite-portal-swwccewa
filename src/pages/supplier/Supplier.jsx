import React, { useState } from "react";
import {
  PlusCircleIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  UsersIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";
import NewIssueForm from "@/components/supplier/NewIssueForm";
import SupplierIssueDetail from "@/components/supplier/SupplierIssueDetail";
import NewSupplierForm from "@/components/supplier/NewSupplierForm";
import SupplierManagement from "@/pages/supplier/SupplierManagement"; // Yönetim bileşeni

const stats = [
  { title: "Toplam Uygunsuzluk", value: "87", icon: ExclamationTriangleIcon, color: "text-red-600", bg: "bg-red-100" },
  { title: "Açık ", value: "12", icon: UsersIcon, color: "text-blue-600", bg: "bg-blue-100" },
  { title: "Beklemede", value: "5", icon: FolderPlusIcon, color: "text-yellow-600", bg: "bg-yellow-100" },
  { title: "Kapatıldı", value: "30", icon: ClipboardDocumentCheckIcon, color: "text-green-600", bg: "bg-green-100" },
  { title: "Kapatılamadı", value: "2", icon: ClipboardDocumentCheckIcon, color: "text-gray-600", bg: "bg-gray-200" }
];

const Supplier = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showManagement, setShowManagement] = useState(false);
  const [isNewSupplierOpen, setIsNewSupplierOpen] = useState(false);

  return (
    <div className="space-y-6 p-6">
      {/* Sayfa Başlığı ve Butonlar */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Tedarikçi Uygunsuzluk Yönetimi</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-600 transition"
          >
            <PlusCircleIcon className="w-5 h-5" />
            Yeni Uygunsuzluk Ekle
          </button>
          <button
            onClick={() => setIsNewSupplierOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-green-600 transition"
          >
            <BuildingOfficeIcon className="w-5 h-5" />
            Yeni Tedarikçi Ekle
          </button>
        </div>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bg}`}>
                <IconComponent className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Uygunsuzluk Yönetimi Butonu */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Uygunsuzluk Yönetimi</h2>
        <button
          onClick={() => setShowManagement(!showManagement)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-800 flex items-center gap-2"
        >
          <ClipboardDocumentCheckIcon className="w-5 h-5" />
          Tedarikçi Uygunsuzluklarını Yönet
        </button>
      </div>

      {/* Sayfanın Devamına Eklenen Tedarikçi Yönetimi */}
      {showManagement && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <SupplierManagement />
        </div>
      )}

      {/* Yeni Uygunsuzluk Ekle Modalı */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">Tedarikçi Uygunsuzluk Girişi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NewIssueForm onClose={() => setIsFormOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Yeni Tedarikçi Ekle Modalı */}
      {isNewSupplierOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl relative h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsNewSupplierOpen(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">Yeni Tedarikçi Ekle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              <NewSupplierForm onClose={() => setIsNewSupplierOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Supplier;
