import React, { useState } from "react";

const ChangeRequestForm = ({ onClose }) => {
  const [requestName, setRequestName] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Değişiklik talebi başarıyla oluşturuldu.");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-3">Değişiklik Talep Formu</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700">Değişiklik Adı:</label>
          <input
            type="text"
            value={requestName}
            onChange={(e) => setRequestName(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">Talep Tarihi:</label>
          <input
            type="date"
            value={requestDate}
            onChange={(e) => setRequestDate(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">Değişiklik Nedeni:</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          ></textarea>

          <label className="block text-gray-700">Ek Açıklamalar:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          ></textarea>

          <label className="block text-gray-700">Ek Belge Yükle (PDF):</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border p-2 rounded-md mb-2"
          />

          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={onClose}
              type="button"
              className="bg-gray-400 text-white px-3 py-1 rounded-md"
            >
              İptal
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeRequestForm;
