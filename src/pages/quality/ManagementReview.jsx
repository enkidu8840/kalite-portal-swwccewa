import React from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const ManagementReview = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Üst Kısım - Başlık ve Buton */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Yönetimin Gözden Geçirmesi</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
          Yeni YGG Toplantısı
        </button>
      </div>

      {/* YGG Toplantıları Listesi */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="space-y-4">
          {/* Başlık */}
          <div className="border-b pb-4">
            <h2 className="text-lg font-medium text-gray-900">YGG Toplantıları</h2>
          </div>

          {/* YGG Toplantı Kartları */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg border">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <DocumentDuplicateIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">2024 Q{i} YGG Toplantısı</p>
                  <p className="text-sm text-gray-500">Tarih: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Tamamlandı
                </span>
                <button className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-gray-600 transition">
                  Rapor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementReview;
