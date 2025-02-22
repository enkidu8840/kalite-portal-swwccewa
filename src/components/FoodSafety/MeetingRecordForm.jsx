import React, { useState } from "react";

const MeetingRecordForm = ({ onSave, onClose }) => {
  const [meetingName, setMeetingName] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingDuration, setMeetingDuration] = useState("");
  const [participants, setParticipants] = useState([{ name: "", role: "" }]);
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);

  const addParticipant = () => {
    setParticipants([...participants, { name: "", role: "" }]);
  };

  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!meetingName || !meetingDate || !meetingTime) {
      alert("Lütfen toplantı bilgilerini eksiksiz doldurun.");
      return;
    }
    const newRecord = { meetingName, meetingDate, meetingTime, meetingDuration, participants, notes, file };
    onSave(newRecord);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[75vh] overflow-auto">
        <h2 className="text-lg font-bold mb-3 text-gray-800">Toplantı Kaydı</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <label className="block font-medium text-gray-700">Toplantı Adı:</label>
          <input type="text" value={meetingName} onChange={(e) => setMeetingName(e.target.value)} className="w-full border p-2 rounded-md mb-2" />

          <label className="block font-medium text-gray-700">Toplantı Tarihi:</label>
          <input type="date" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} className="w-full border p-2 rounded-md mb-2" />

          <label className="block font-medium text-gray-700">Toplantı Saati:</label>
          <input type="time" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} className="w-full border p-2 rounded-md mb-2" />

          <label className="block font-medium text-gray-700">Süre (Dakika):</label>
          <input type="number" value={meetingDuration} onChange={(e) => setMeetingDuration(e.target.value)} className="w-full border p-2 rounded-md mb-2" />

          <label className="block font-medium text-gray-700">Katılımcılar:</label>
          {participants.map((participant, index) => (
            <div key={index} className="flex gap-2 mb-1">
              <input type="text" placeholder="Ad Soyad" value={participant.name} onChange={(e) => handleParticipantChange(index, "name", e.target.value)} className="w-full border p-2 rounded-md" />
              <input type="text" placeholder="Görevi" value={participant.role} onChange={(e) => handleParticipantChange(index, "role", e.target.value)} className="w-full border p-2 rounded-md" />
            </div>
          ))}
          <button type="button" onClick={addParticipant} className="bg-green-500 text-white px-3 py-1 rounded-md">Katılımcı Ekle</button>

          <label className="block font-medium text-gray-700 mt-3">Açıklamalar:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border p-2 rounded-md mb-2"></textarea>

          <label className="block font-medium text-gray-700 mt-3">İmzalı Form Yükle (PDF):</label>
          <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full border p-2 rounded-md mb-2" />

          <div className="flex justify-end gap-2 mt-3">
            <button onClick={onClose} type="button" className="bg-gray-400 text-white px-3 py-1 rounded-md">İptal</button>
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingRecordForm;
