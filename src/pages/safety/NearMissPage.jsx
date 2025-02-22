import React, { useState } from "react";
import NearMissForm from "../../components/safety/NearMissForm";

const NearMissPage = () => {
  const [nearMisses, setNearMisses] = useState([]);

  const handleFormSubmit = (formData) => {
    setNearMisses([...nearMisses, { id: Date.now(), ...formData }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ramak Kala Olayları</h1>
      <NearMissForm onSubmit={handleFormSubmit} />
      <div className="mt-4">
        {nearMisses.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-md bg-white mb-2">
            <p><strong>Tarih:</strong> {item.tarih}</p>
            <p><strong>Olay Yeri:</strong> {item.olayYeri}</p>
            <p><strong>Açıklama:</strong> {item.açıklama}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearMissPage;
