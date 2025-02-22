import React, { useState } from "react";
import SupplierIssueDetail from "@/components/supplier/SupplierIssueDetail";

const SupplierManagement = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Arama için state
  const [statusFilter, setStatusFilter] = useState("Tümü");

  const issues = [
    { no: "25TU0009", date: "06.01.2025", business: "KOÇ HOLDİNG", supplier: "İLKAY GLOBAL", product: "Taze Tavuk Bonfile", status: "Açık" },
    { no: "25TU0010", date: "07.01.2025", business: "MEMORIAL HASTANESİ", supplier: "NAMET", product: "Dana Kuşbaşı", status: "Kapalı" }
  ];

  // Filtreleme işlemi
  const filteredIssues = issues.filter(issue =>
    issue.product.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === "Tümü" || issue.status === statusFilter)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tedarikçi Uygunsuzluk Kayıtları</h2>

      {/* 🔍 Filtreleme Alanı */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Ürün Ara..."
          className="border p-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 rounded w-1/3"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="Tümü">Tümü</option>
          <option value="Açık">Açık</option>
          <option value="Kapalı">Kapalı</option>
        </select>
      </div>

      {/* 📋 Tedarikçi Uygunsuzluk Tablosu */}
      <table className="w-full border-collapse border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border p-2">No</th>
            <th className="border p-2">Tarih</th>
            <th className="border p-2">İşletme</th>
            <th className="border p-2">Ürün</th>
            <th className="border p-2">Durum</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssues.map((issue) => (
            <tr
              key={issue.no}
              className="hover:bg-gray-200 cursor-pointer transition duration-200"
              onClick={() => setSelectedIssue(issue)}
            >
              <td className="border p-2">{issue.no}</td>
              <td className="border p-2">{issue.date}</td>
              <td className="border p-2">{issue.business}</td>
              <td className="border p-2">{issue.product}</td>
              <td className={`border p-2 font-bold ${issue.status === "Açık" ? "text-red-500" : "text-green-600"}`}>
                {issue.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📝 Detay bileşeni */}
      {selectedIssue && <SupplierIssueDetail issue={selectedIssue} onClose={() => setSelectedIssue(null)} />}
    </div>
  );
};

export default SupplierManagement;
