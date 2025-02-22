import React, { useState } from "react";

const DeviceMaintenanceForm = ({ onClose }) => {
  const [deviceName, setDeviceName] = useState("");
  const [maintenanceDate, setMaintenanceDate] = useState("");
  const [maintenanceType, setMaintenanceType] = useState("Periyodik");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cihaz bakım kaydı başarıyla oluşturuldu.");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-3">Cihaz Bakım Formu</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700">Cihaz Adı:</label>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">Bakım Tarihi:</label>
          <input
            type="date"
            value={maintenanceDate}
            onChange={(e) => setMaintenanceDate(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">Bakım Türü:</label>
          <select
            value={maintenanceType}
            onChange={(e) => setMaintenanceType(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          >
            <option value="Periyodik">Periyodik</option>
            <option value="Arıza">Arıza</option>
            <option value="Önleyici">Önleyici</option>
          </select>

          <label className="block text-gray-700">Açıklamalar:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          ></textarea>

          <label className="block text-gray-700">Bakım Belgesi Yükle (PDF):</label>
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
              className="bg-yellow-500 text-white px-3 py-1 rounded-md"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeviceMaintenanceForm;
