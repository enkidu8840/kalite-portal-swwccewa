import React from "react";
import { Link } from "react-router-dom";

const AnalysisManagement = () => {
  return (
    <div className="p-6">
      {/* Başlık */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        📊 Analiz Planı Yönetimi
      </h1>

      {/* Butonlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link
          to="/lab/create-analysis-plan"
          className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          📑 Analiz Planı Oluştur
        </Link>
        <Link
          to="/lab/analysis-matrix"
          className="flex items-center justify-center bg-yellow-500 text-white p-4 rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          📊 Analiz Planı Matrisi
        </Link>
        <Link
          to="/lab/enter-analysis-result"
          className="flex items-center justify-center bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          ✅ Analiz Sonucu Gir
        </Link>
      </div>

      {/* Mevcut Analiz Planları */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          📌 Mevcut Analiz Planları
        </h2>
        <p className="text-gray-500">Şu an mevcut analiz planlarının özeti burada görüntülenecek.</p>
      </div>
    </div>
  );
};

export default AnalysisManagement;
