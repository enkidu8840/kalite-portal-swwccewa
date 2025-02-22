import React, { useState } from "react";
import FoodSafetyTeamForm from "@/components/FoodSafety/FoodSafetyTeamForm";
import MeetingRecordForm from "@/components/FoodSafety/MeetingRecordForm"; // Yeni Toplantı Kayıt Formu eklendi

const FoodSafetyTeam = () => {
  const [team, setTeam] = useState([]);
  const [leader, setLeader] = useState(null);
  const [businessName, setBusinessName] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showMeetingForm, setShowMeetingForm] = useState(false); // Toplantı formu aç/kapa durumu
  const [savedData, setSavedData] = useState(null);
  const [meetingRecords, setMeetingRecords] = useState([]); // Toplantı kayıtlarını saklamak için state

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  const handleOpenMeetingForm = () => setShowMeetingForm(true); // Toplantı formunu aç
  const handleCloseMeetingForm = () => setShowMeetingForm(false); // Toplantı formunu kapat

  const handleSaveTeam = () => {
    if (team.length === 0 || !businessName || !updateDate) {
      alert("Lütfen tüm bilgileri doldurun ve ekibi oluşturun.");
      return;
    }
    setSavedData({ leader, team, businessName, updateDate });
    setShowForm(false);
  };

  const handleSaveMeetingRecord = (record) => {
    setMeetingRecords([...meetingRecords, record]); // Yeni kaydı listeye ekle
    setShowMeetingForm(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-md mt-6">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <button
          onClick={handleOpenForm}
          disabled={!!savedData}
          className={`py-2 rounded-md text-white text-sm ${
            savedData ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Gıda Güvenliği Ekibi Oluştur
        </button>

        <button
          onClick={handleOpenForm}
          disabled={!savedData}
          className={`py-2 rounded-md text-white text-sm ${
            savedData ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Gıda Güvenliği Ekibini Güncelle
        </button>

        <button
          onClick={handleOpenMeetingForm}
          disabled={!savedData}
          className={`py-2 rounded-md text-white text-sm ${
            savedData ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Ekip Toplantı Kaydı Gir
        </button>
      </div>

      {savedData && (
        <div>
          <h2 className="text-xl font-bold text-gray-700">Gıda Güvenliği Ekibi</h2>
          <p><strong>İşletme:</strong> {savedData.businessName}</p>
          <p><strong>Güncelleme Tarihi:</strong> {savedData.updateDate}</p>
          {savedData.leader && <p><strong>Lider:</strong> {savedData.leader.name} ({savedData.leader.role})</p>}

          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="border p-2 text-sm">SIRA NO</th>
                <th className="border p-2 text-sm">ADI SOYADI</th>
                <th className="border p-2 text-sm">GÖREVİ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border p-2 text-sm">1</td>
                <td className="border p-2 text-sm">{savedData.leader.name}</td>
                <td className="border p-2 text-sm">{savedData.leader.role} (Lider)</td>
              </tr>
              {savedData.team.map((member, index) => (
                <tr key={index} className="border">
                  <td className="border p-2 text-sm">{index + 2}</td>
                  <td className="border p-2 text-sm">{member.name}</td>
                  <td className="border p-2 text-sm">{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Toplantı Kaydı Formu Açıldığında Göster */}
      {showMeetingForm && (
        <MeetingRecordForm
          onSave={handleSaveMeetingRecord}
          onClose={handleCloseMeetingForm}
        />
      )}

      {/* Ekip oluşturma formu */}
      {showForm && (
        <FoodSafetyTeamForm
          onClose={handleCloseForm}
          onSave={handleSaveTeam}
          team={team}
          setTeam={setTeam}
          setLeader={setLeader}
          businessName={businessName}
          setBusinessName={setBusinessName}
          updateDate={updateDate}
          setUpdateDate={setUpdateDate}
        />
      )}

      {/* Kaydedilen Toplantı Kayıtlarını Göster */}
      {meetingRecords.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-700">Toplantı Kayıtları</h2>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border p-2 text-sm">Tarih</th>
                <th className="border p-2 text-sm">Saat</th>
                <th className="border p-2 text-sm">Toplantı Adı</th>
                <th className="border p-2 text-sm">Süre</th>
                <th className="border p-2 text-sm">Açıklamalar</th>
              </tr>
            </thead>
            <tbody>
              {meetingRecords.map((record, index) => (
                <tr key={index} className="border">
                  <td className="border p-2 text-sm">{record.meetingDate}</td>
                  <td className="border p-2 text-sm">{record.meetingTime}</td>
                  <td className="border p-2 text-sm">{record.meetingName}</td>
                  <td className="border p-2 text-sm">{record.meetingDuration} dk</td>
                  <td className="border p-2 text-sm">{record.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FoodSafetyTeam;
