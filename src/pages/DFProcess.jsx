import React from "react";
import { ChartBarIcon } from "@heroicons/react/24/outline";

const DFProcess = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Üst Kısım - Başlık ve Buton */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">DF Süreci</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
          Yeni DF Oluştur
        </button>
      </div>

      {/* DF Süreç Durumları - Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Açık DF'ler */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ChartBarIcon className="w-5 h-5 text-yellow-500" />
            Açık DF'ler
          </h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 hover:bg-gray-100 rounded-lg border">
                <p className="font-medium text-gray-900">DF-2024-{i}</p>
                <p className="text-sm text-gray-500">Süreç İyileştirme</p>
              </div>
            ))}
          </div>
        </div>

        {/* İşlemde Olan DF'ler */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ChartBarIcon className="w-5 h-5 text-blue-500" />
            İşlemde
          </h2>
          <div className="space-y-4">
            {[3, 4].map((i) => (
              <div key={i} className="p-4 hover:bg-gray-100 rounded-lg border">
                <p className="font-medium text-gray-900">DF-2024-{i}</p>
                <p className="text-sm text-gray-500">Önleyici Faaliyet</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tamamlanan DF'ler */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ChartBarIcon className="w-5 h-5 text-green-500" />
            Tamamlanan
          </h2>
          <div className="space-y-4">
            {[5, 6].map((i) => (
              <div key={i} className="p-4 hover:bg-gray-100 rounded-lg border">
                <p className="font-medium text-gray-900">DF-2024-{i}</p>
                <p className="text-sm text-gray-500">Düzeltici Faaliyet</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DFProcess;
