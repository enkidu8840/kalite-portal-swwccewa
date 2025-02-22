import React, { useState } from "react";

const RecallPage = () => {
  const [selectedRecall, setSelectedRecall] = useState(null);

  const recalls = [
    { id: 1, title: "Geri Çekme 1", description: "Bu geri çekme, ürün A için geçerlidir." },
    { id: 2, title: "Geri Çekme 2", description: "Bu geri çekme, ürün B için geçerlidir." },
    { id: 3, title: "Geri Çekme 3", description: "Bu geri çekme, ürün C için geçerlidir." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Geri Çekme</h1>
      <p className="text-gray-700 mt-2">
        Ürün geri çekme işlemleriyle ilgili detayları buradan yönetebilirsiniz.
      </p>
      <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
        Yeni Geri Çekme Ekle
      </button>
      
      <h2 className="text-lg font-semibold mt-6">Önceki Kayıtlar</h2>
      <ul className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
        {recalls.map((recall) => (
          <li
            key={recall.id}
            className="p-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedRecall(recall)}
          >
            {recall.title}
          </li>
        ))}
      </ul>

      {selectedRecall && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold">{selectedRecall.title}</h3>
            <p className="text-gray-700 mt-2">{selectedRecall.description}</p>
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={() => setSelectedRecall(null)}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecallPage;
