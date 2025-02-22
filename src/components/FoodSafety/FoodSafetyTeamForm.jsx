import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const FoodSafetyTeamForm = ({ onClose, onSave, team, setTeam, setLeader, businessName, setBusinessName, updateDate, setUpdateDate }) => {
  const [newMember, setNewMember] = useState({ name: "", role: "", pdfFile: null });
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [signedPdf, setSignedPdf] = useState(null);

  // Yeni üye ekleme
  const handleAddMember = () => {
    if (!newMember.name || !newMember.role || !newMember.pdfFile) {
      alert("Lütfen tüm alanları doldurun ve PDF yükleyin.");
      return;
    }
    setTeam([...team, newMember]);
    setNewMember({ name: "", role: "", pdfFile: null });
  };

  // PDF yükleme işlemi
  const handleFileUpload = (event) => {
    setNewMember({ ...newMember, pdfFile: event.target.files[0] });
  };

  // İmzalı PDF yükleme
  const handleSignedPdfUpload = (event) => {
    setSignedPdf(event.target.files[0]);
  };

  // Lider seçimi
  const handleSelectLeader = (event) => {
    const leaderName = event.target.value;
    const leader = team.find(member => member.name === leaderName);
    setSelectedLeader(leader);
    setLeader(leader);
  };

  // PDF oluşturma ve indirme
  const generatePDF = () => {
    if (!businessName || !updateDate || team.length === 0 || !selectedLeader) {
      alert("Lütfen tüm alanları doldurun ve lider seçin.");
      return;
    }

    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    // Base64 formatında logo
    const logoBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...";
    
    doc.addImage(logoBase64, "JPEG", 10, 5, 50, 15);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("GIDA GÜVENLİĞİ EKİP LİSTESİ", 60, 25);

    // Üst Bilgiler
    autoTable(doc, {
      startY: 30,
      head: [["İşletme Adı", "Güncelleme Tarihi"]],
      body: [[businessName, updateDate]],
      theme: "grid"
    });

    // Ekip Üyeleri Tablosu
    const tableBody = [
      [1, selectedLeader.name, `${selectedLeader.role} (⭐ Lider)`, "✓"], 
      ...team.filter(member => member !== selectedLeader).map((member, index) => [index + 2, member.name, member.role, "✓"])
    ];

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["SIRA NO", "ADI SOYADI", "GÖREVİ", "İMZALI PDF"]],
      body: tableBody,
      theme: "grid"
    });

    doc.save("Gida_Guvenligi_Ekip_Listesi.pdf");
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md max-w-lg w-full overflow-y-auto max-h-[90vh]">
        <h2 className="text-lg font-bold mb-4">Gıda Güvenliği Ekibi Yönetimi</h2>

        <label className="block text-gray-700 font-semibold mb-2 text-sm">İşletme Adı:</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-md mb-2 text-sm" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />

        <label className="block text-gray-700 font-semibold mb-2 text-sm">Güncelleme Tarihi:</label>
        <input type="date" className="w-full p-2 border border-gray-300 rounded-md mb-2 text-sm" value={updateDate} onChange={(e) => setUpdateDate(e.target.value)} />

        <h3 className="text-sm font-semibold mt-4">Yeni Üye Ekle</h3>
        <input type="text" placeholder="Adı Soyadı" value={newMember.name} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md mb-2 text-sm" />
        <input type="text" placeholder="Görevi" value={newMember.role} onChange={(e) => setNewMember({ ...newMember, role: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md mb-2 text-sm" />
        <input type="file" accept=".pdf" onChange={handleFileUpload} className="w-full mb-2 text-sm" />
        <p className="text-xs text-gray-500">{team.length === 0 ? "İmzalı Gıda Güvenliği Ekibi Görev Tanımı Ekle" : "Ek belge ekleyebilirsiniz"}</p>

        <button onClick={handleAddMember} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4 text-sm">
          + Üye Ekle
        </button>

        {team.length > 0 && (
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">SIRA NO</th>
                <th className="border p-2">ADI SOYADI</th>
                <th className="border p-2">GÖREVİ</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{member.name}</td>
                  <td className="border p-2">{member.role} {selectedLeader?.name === member.name ? "(⭐ Lider)" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <label className="block text-gray-700 font-semibold mt-4 text-sm">Ekip Lideri Seç:</label>
        <select className="w-full p-2 border border-gray-300 rounded-md mb-4 text-sm" onChange={handleSelectLeader} value={selectedLeader?.name || ""}>
          <option value="">Lider Seçiniz</option>
          {team.map((member, index) => (
            <option key={index} value={member.name}>{member.name} ({member.role})</option>
          ))}
        </select>

        <button onClick={generatePDF} className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 text-sm">
          📄 PDF Olarak İndir
        </button>

        <label className="block text-gray-700 font-semibold mt-4 text-sm">İmzalı PDF Yükle:</label>
        <input type="file" accept=".pdf" onChange={handleSignedPdfUpload} className="w-full mb-2 text-sm" />

        <button onClick={onSave} className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 text-sm mt-2">
          📤 Kaydet ve Sisteme Yükle
        </button>

        <button onClick={onClose} className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 mt-2 text-sm">
          ❌ Kapat
        </button>
      </div>
    </div>
  );
};

export default FoodSafetyTeamForm;
