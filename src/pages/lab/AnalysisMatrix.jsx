import React, { useState } from "react";

const analysisTypes = [
  { name: "Mikrobiyolojik", color: "bg-red-200", icon: "🦠" },
  { name: "Kimyasal", color: "bg-blue-200", icon: "🧪" },
  { name: "Fiziksel", color: "bg-yellow-200", icon: "⚗️" },
];

const months = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const AnalysisMatrix = () => {
  const [matrix, setMatrix] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);

  const openAnalysisModal = (company, month) => {
    setSelectedCompany(company);
    setSelectedMonth(month);
    setSelectedAnalysis(null);
  };

  const addAnalysisToMatrix = (type) => {
    const newMatrix = { ...matrix };
    if (!newMatrix[selectedCompany]) {
      newMatrix[selectedCompany] = {};
    }
    newMatrix[selectedCompany][selectedMonth] = type;
    setMatrix(newMatrix);
    setSelectedAnalysis(null);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">🔬 Analiz Planı Matrisi</h1>

      {/* Açıklama Kartı */}
      <div className="p-4 mb-4 bg-gray-100 border-l-4 border-blue-500">
        <p className="text-blue-700 text-sm">
          📌 **Matris üzerine tıklayarak analiz ekleyebilirsiniz.**  
          📌 **Seçilen analiz rengine ve ikonuna göre gösterilir.**  
        </p>
      </div>

      {/* 📅 Analiz Matrisi */}
      <div className="overflow-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">İşletme</th>
              {months.map((month) => (
                <th key={month} className="border px-4 py-2">{month}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["İşletme 1", "İşletme 2", "İşletme 3"].map((company) => (
              <tr key={company}>
                <td className="border px-4 py-2 font-semibold">{company}</td>
                {months.map((month) => (
                  <td
                    key={month}
                    className={`border px-4 py-2 text-center cursor-pointer ${matrix[company]?.[month]?.color || "bg-gray-100"}`}
                    onClick={() => openAnalysisModal(company, month)}
                  >
                    {matrix[company]?.[month] ? (
                      <>
                        {matrix[company][month].icon} {matrix[company][month].name}
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🧪 Analiz Seçim Modali */}
      {selectedMonth && selectedCompany && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {selectedCompany} - {selectedMonth} için Analiz Seç
            </h2>
            {analysisTypes.map((type) => (
              <button
                key={type.name}
                className={`w-full p-3 mb-2 rounded-lg text-white ${type.color}`}
                onClick={() => addAnalysisToMatrix(type)}
              >
                {type.icon} {type.name}
              </button>
            ))}
            <button
              className="w-full p-3 bg-gray-500 text-white rounded-lg"
              onClick={() => setSelectedMonth(null)}
            >
              İptal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisMatrix;
