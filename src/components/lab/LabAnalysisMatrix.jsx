import React, { useState, useEffect } from "react";

const LabAnalysisMatrix = ({ businesses }) => {
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  const [matrix, setMatrix] = useState({});

  useEffect(() => {
    const tempMatrix = {};
    businesses.forEach((business) => {
      tempMatrix[business.name] = {};
      months.forEach((month, index) => {
        tempMatrix[business.name][month] =
          index % business.period === 0 ? "✔ Analiz" : "";
      });
    });
    setMatrix(tempMatrix);
  }, [businesses]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analiz Planı Matrisi</h1>
      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border p-2">İşletmeler</th>
            {months.map((month) => (
              <th key={month} className="border p-2">{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.name}>
              <td className="border p-2">{business.name}</td>
              {months.map((month) => (
                <td key={`${business.name}-${month}`} className="border p-2">
                  {matrix[business.name]?.[month]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabAnalysisMatrix;
