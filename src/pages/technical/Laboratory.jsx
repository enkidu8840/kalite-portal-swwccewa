import React from "react";
import { BeakerIcon } from "@heroicons/react/24/outline";

const Laboratory = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Üst Kısım - Başlık ve Buton */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Laboratuvar Analiz</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
          Yeni Analiz Talebi
        </button>
      </div>

      {/* Analiz Talepleri Listesi */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-lg font-medium text-gray-900">Analiz Talepleri</h2>
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg border"
            >
              {/* Analiz İkonu & Bilgiler */}
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BeakerIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Analiz #{i}</p>
                  <p className="text-sm text-gray-500">Hammadde Kalite Kontrolü</p>
                </div>
              </div>

              {/* İşlem Durumu ve Buton */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  İşlemde
                </span>
                <button className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-gray-600 transition text-sm">
                  Sonuçlar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
