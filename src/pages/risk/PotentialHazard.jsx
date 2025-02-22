import React, { useState } from "react";

const PotentialHazardPage = () => {
  const [selectedHazard, setSelectedHazard] = useState(null);

  const hazards = [
    { id: 1, title: "Tehlikeli Durum 1", description: "Bu durum, üretim hattında yaşanan bir sorundur." },
    { id: 2, title: "Tehlikeli Durum 2", description: "Bu durum, depolama sürecinde tespit edilmiştir." },
    { id: 3, title: "Tehlikeli Durum 3", description: "Bu durum, taşımacılık sırasında meydana gelmiştir." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Potansiyel Güvenli Olmayan Durum</h1>
      <p className="text-gray-700 mt-2">
        Güvenliği tehdit eden durumları belirleyin ve değerlendirin.
      </p>
      <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
        Yeni Durum Raporla
      </button>
      
      <h2 className="text-lg font-semibold mt-6">Önceki Kayıtlar</h2>
      <ul className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
        {hazards.map((hazard) => (
          <li
            key={hazard.id}
            className="p-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedHazard(hazard)}
          >
            {hazard.title}
          </li>
        ))}
      </ul>

      {selectedHazard && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold">{selectedHazard.title}</h3>
            <p className="text-gray-700 mt-2">{selectedHazard.description}</p>
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={() => setSelectedHazard(null)}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PotentialHazardPage;
