import React from "react";
import { Link } from "react-router-dom";

const Laboratory = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🧪 Laboratuvar Yönetimi</h1>

      {/* Butonlar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Link
          to="/lab/analysis-management"
          className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          📑 Analiz Planını Yönet
        </Link>
        <Link
          to="/lab/analysis-results"
          className="flex items-center justify-center bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          ✅ Analiz Sonuçlarını Yönet
        </Link>
        <Link
          to="/lab/upload-lab-report"
          className="flex items-center justify-center bg-purple-500 text-white p-4 rounded-lg shadow-md hover:bg-purple-600 transition"
        >
          📤 Dış Lab Rapor Yükle
        </Link>
        <Link
          to="/lab/internal-analysis"
          className="flex items-center justify-center bg-red-500 text-white p-4 rounded-lg shadow-md hover:bg-red-600 transition"
        >
          🔬 İç Lab Analizleri Yönet
        </Link>
      </div>

      {/* Analiz Planları Tablosu */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          📊 Mevcut Analiz Planları ve Sonuçları
        </h2>

        <table className="w-full border-collapse border border-gray-300 shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="p-3 border border-gray-300">Analiz ID</th>
              <th className="p-3 border border-gray-300">Numune Adı</th>
              <th className="p-3 border border-gray-300">Sonuç</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition">
              <td className="p-3 border border-gray-300">001</td>
              <td className="p-3 border border-gray-300">Su Analizi</td>
              <td className="p-3 border border-gray-300 text-green-600 font-semibold">Uygun</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Laboratory;
