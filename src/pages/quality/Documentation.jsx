import React, { useState } from "react";
import {
  EyeIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
  FolderIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const folders = [
  {
    name: "Akış Şemaları",
    files: ["Akış Planı", "Şema 1", "Diyagram"],
  },
  {
    name: "HACCP",
    files: ["HACCP Planı", "Kritik Noktalar", "Risk Değerlendirme"],
  },
  {
    name: "Eğitim Sunumları",
    files: ["Hijyen Eğitimi", "İş Sağlığı", "Yangın Eğitimi"],
  },
];

const newFiles = ["Akış Planı", "Şema 1", "İş Sağlığı Eğitimi"];
const updatedFiles = ["Poliçe 2024", "HACCP Planı", "Kritik Noktalar"];

const Documentation = () => {
  const [openFolders, setOpenFolders] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    let matchedFolder = null;

    folders.forEach((folder) => {
      folder.files.forEach((file) => {
        if (file.toLowerCase().includes(term.toLowerCase())) {
          matchedFolder = folder.name;
        }
      });
    });

    if (matchedFolder) {
      setOpenFolders((prev) => ({ ...prev, [matchedFolder]: true }));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* ÜST KISIM: Dokümantasyon Yönetimi + Butonlar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📂 Dokümantasyon Yönetimi</h1>

        {/* Sağ Üst Butonlar */}
        <div className="flex flex-col space-y-2">
          <button className="flex items-center gap-2 text-xs text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 transition">
            <PlusCircleIcon className="w-4 h-4" />
            Yeni Doküman Talebi
          </button>
          <button className="flex items-center gap-2 text-xs text-white bg-yellow-500 px-3 py-1 rounded-md hover:bg-yellow-600 transition">
            <PencilSquareIcon className="w-4 h-4" />
            Revizyon Talebi
          </button>
          <button className="flex items-center gap-2 text-xs text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition">
            <TrashIcon className="w-4 h-4" />
            İptal Talebi
          </button>
        </div>
      </div>

      {/* YENİ EKLENENLER & GÜNCELLENENLER */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-bold text-blue-600">🆕 Yeni Eklenenler</h2>
          <ul className="ml-2 text-blue-700">
            {newFiles.map((file) => (
              <li key={file} className="flex justify-between items-center cursor-pointer hover:text-blue-900">
                📄 {file}
                <div className="flex items-center gap-2">
                  <EyeIcon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
                  <ArrowDownTrayIcon className="w-5 h-5 text-green-600 cursor-pointer hover:text-green-900" />
                  <PrinterIcon className="w-5 h-5 text-yellow-600 cursor-pointer hover:text-yellow-900" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-bold text-blue-600">🔄 Güncellenenler</h2>
          <ul className="ml-2 text-blue-700">
            {updatedFiles.map((file) => (
              <li key={file} className="flex justify-between items-center cursor-pointer hover:text-blue-900">
                📄 {file}
                <div className="flex items-center gap-2">
                  <EyeIcon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
                  <ArrowDownTrayIcon className="w-5 h-5 text-green-600 cursor-pointer hover:text-green-900" />
                  <PrinterIcon className="w-5 h-5 text-yellow-600 cursor-pointer hover:text-yellow-900" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ARAMA KUTUSU */}
      <input
        type="text"
        placeholder="Dosya Ara..."
        className="border p-3 w-full rounded-md shadow-sm mb-4"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* KLASÖRLER & DOSYALAR */}
      {folders.map((folder) => (
        <div key={folder.name} className="bg-white shadow-md rounded-lg p-4 mb-2">
          <div
            className="flex items-center cursor-pointer text-lg font-semibold"
            onClick={() => setOpenFolders((prev) => ({ ...prev, [folder.name]: !prev[folder.name] }))}
          >
            {openFolders[folder.name] ? <ChevronDownIcon className="w-5 h-5 mr-2" /> : <ChevronRightIcon className="w-5 h-5 mr-2" />}
            <FolderIcon className="w-6 h-6 text-gray-700 mr-2" />
            {folder.name}
          </div>

          {openFolders[folder.name] && (
            <ul className="ml-8 mt-2 text-gray-700">
              {folder.files.map((file) => (
                <li
                  key={file}
                  className={`flex justify-between items-center hover:text-gray-900 cursor-pointer ${
                    searchTerm && file.toLowerCase().includes(searchTerm) ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  📄 {file}
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
                    <ArrowDownTrayIcon className="w-5 h-5 text-green-600 cursor-pointer hover:text-green-900" />
                    <PrinterIcon className="w-5 h-5 text-yellow-600 cursor-pointer hover:text-yellow-900" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Documentation;
