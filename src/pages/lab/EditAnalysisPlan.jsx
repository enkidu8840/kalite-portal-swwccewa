import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditAnalysisPlan = () => {
  const { id } = useParams(); // URL'den plan ID'sini al
  const [plan, setPlan] = useState({ planName: "", period: "" });

  useEffect(() => {
    // 📌 Backend'den plan verilerini çekme simülasyonu
    setPlan({ planName: `Plan ${id}`, period: "3" });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Güncellenen Plan:", plan);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">✏️ Analiz Planını Güncelle</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold">Plan Adı:</label>
          <input
            type="text"
            value={plan.planName}
            onChange={(e) => setPlan({ ...plan, planName: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Periyot (Ay):</label>
          <input
            type="number"
            value={plan.period}
            onChange={(e) => setPlan({ ...plan, period: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded shadow">
          💾 Güncelle
        </button>
      </form>
    </div>
  );
};

export default EditAnalysisPlan;
