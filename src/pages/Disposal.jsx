import React, { useState } from "react";

const DisposalPage = () => {
  const [selectedDisposal, setSelectedDisposal] = useState(null);

  const disposals = [
    { id: 1, title: "İmha Kaydı 1", description: "Bu imha kaydı, son kullanma tarihi geçmiş ürünler içindir." },
    { id: 2, title: "İmha Kaydı 2", description: "Bu imha kaydı, kalite kontrol testlerinden başarısız olan ürünler içindir." },
    { id: 3, title: "İmha Kaydı 3", description: "Bu imha kaydı, yanlış depolama nedeniyle bozulan ürünler içindir." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">İmha</h1>
      <p className="text-gray-700 mt-2">
        İmha sürecine giren ürünler için kayıt oluşturabilirsiniz.
      </p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Yeni İmha Kaydı Oluştur
      </button>
      
      <h2 className="text-lg font-semibold mt-6">Önceki Kayıtlar</h2>
      <ul className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
        {disposals.map((disposal) => (
          <li
            key={disposal.id}
            className="p-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedDisposal(disposal)}
          >
            {disposal.title}
          </li>
        ))}
      </ul>

      {selectedDisposal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold">{selectedDisposal.title}</h3>
            <p className="text-gray-700 mt-2">{selectedDisposal.description}</p>
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={() => setSelectedDisposal(null)}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisposalPage;
