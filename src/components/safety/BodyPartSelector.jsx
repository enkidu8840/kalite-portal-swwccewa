import React, { useState } from "react";
import BodySvg from "./BodySvg";

const BodyPartSelector = () => {
  const [selectedParts, setSelectedParts] = useState([]);
  const [isFront, setIsFront] = useState(true);

  const toggleSelection = (part) => {
    setSelectedParts((prev) =>
      prev.includes(part) ? prev.filter((p) => p !== part) : [...prev, part]
    );
  };

  const resetSelection = () => setSelectedParts([]);

  return (
    <div className="flex flex-col items-center">
      <BodySvg selectedParts={selectedParts} toggleSelection={toggleSelection} isFront={isFront} />
      
      <div className="mt-4">
        <button onClick={() => setIsFront(!isFront)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          {isFront ? "Arka Görünüm" : "Ön Görünüm"}
        </button>
        <button onClick={resetSelection} className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700">
          Temizle
        </button>
      </div>

      <h3 className="font-bold mt-4">Seçilen Bölgeler</h3>
      <ul className="list-disc pl-4">
        {selectedParts.length > 0 ? selectedParts.map((part) => (
          <li key={part} className="text-green-700 font-semibold">{part}</li>
        )) : (
          <li className="text-gray-500">Henüz seçim yapılmadı.</li>
        )}
      </ul>
    </div>
  );
};

export default BodyPartSelector;
