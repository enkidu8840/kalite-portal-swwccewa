import React from "react";

const LabAnalysisTable = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Mevcut Analiz Planları ve Sonuçları</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Analiz ID</th>
            <th className="border p-2">Numune Adı</th>
            <th className="border p-2">Sonuç</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">001</td>
            <td className="border p-2">Su Analizi</td>
            <td className="border p-2 text-green-600">Uygun</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LabAnalysisTable;
