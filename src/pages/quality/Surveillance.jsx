import React from "react";

const Surveillance = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gözetim</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
          Yeni Gözetim Kaydı
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-lg font-medium text-gray-900">Gözetim Kayıtları</h2>
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg border"
            >
              <div className="space-y-1">
                <p className="font-medium text-gray-900">Gözetim #{i}</p>
                <p className="text-sm text-gray-500">Proses kontrol ve izleme</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Tamamlandı
                </span>
                <button className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-gray-600 transition text-sm">
                  Raporu Gör
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
