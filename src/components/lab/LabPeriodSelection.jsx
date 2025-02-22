import React, { useState } from "react";

const LabPeriodSelection = ({ onSubmit }) => {
  const [period, setPeriod] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Analiz Periyodu Seç</h2>
      <select
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Periyot Seç</option>
        <option value="3">3 Aylık</option>
        <option value="4">4 Aylık</option>
        <option value="6">6 Aylık</option>
      </select>
      <button
        onClick={() => onSubmit(period)}
        className="bg-blue-500 text-white p-2 mt-4 rounded"
      >
        Kaydet
      </button>
    </div>
  );
};

export default LabPeriodSelection;
