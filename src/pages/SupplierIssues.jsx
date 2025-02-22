import React from "react";

const SupplierIssues = ({ onSelectIssue }) => {
  const sampleIssues = [
    { no: "25TU0009", date: "06.01.2025", business: "KOÇ HOLDİNG", supplier: "İLKAY GLOBAL", product: "Taze Tavuk Bonfile", status: "Açık" },
    { no: "25TU0010", date: "07.01.2025", business: "MEMORIAL HASTANESİ", supplier: "NAMET", product: "Dana Kuşbaşı", status: "Kapalı" }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Tedarikçi Uygunsuzluk Listesi</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">No</th>
            <th className="border p-2">Tarih</th>
            <th className="border p-2">İşletme</th>
            <th className="border p-2">Tedarikçi</th>
            <th className="border p-2">Durum</th>
          </tr>
        </thead>
        <tbody>
          {sampleIssues.map((issue) => (
            <tr key={issue.no} className="cursor-pointer hover:bg-gray-200" onClick={() => onSelectIssue(issue)}>
              <td className="border p-2">{issue.no}</td>
              <td className="border p-2">{issue.date}</td>
              <td className="border p-2">{issue.business}</td>
              <td className="border p-2">{issue.supplier}</td>
              <td className="border p-2">{issue.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierIssues;  // ✅ Default export eklenmiş hali
import React from "react";

const SupplierIssues = ({ onSelectIssue }) => {
  const sampleIssues = [
    { no: "25TU0009", date: "06.01.2025", business: "KOÇ HOLDİNG", supplier: "İLKAY GLOBAL", product: "Taze Tavuk Bonfile", status: "Açık" },
    { no: "25TU0010", date: "07.01.2025", business: "MEMORIAL HASTANESİ", supplier: "NAMET", product: "Dana Kuşbaşı", status: "Kapalı" }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Tedarikçi Uygunsuzluk Listesi</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">No</th>
            <th className="border p-2">Tarih</th>
            <th className="border p-2">İşletme</th>
            <th className="border p-2">Tedarikçi</th>
            <th className="border p-2">Durum</th>
          </tr>
        </thead>
        <tbody>
          {sampleIssues.map((issue) => (
            <tr key={issue.no} className="cursor-pointer hover:bg-gray-200" onClick={() => onSelectIssue(issue)}>
              <td className="border p-2">{issue.no}</td>
              <td className="border p-2">{issue.date}</td>
              <td className="border p-2">{issue.business}</td>
              <td className="border p-2">{issue.supplier}</td>
              <td className="border p-2">{issue.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierIssues;  // ✅ Default export eklenmiş hali
