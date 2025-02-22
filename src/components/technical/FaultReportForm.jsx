import React, { useState } from "react";

const FaultReportForm = ({ onClose }) => {
  const [businessName, setBusinessName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [faultDate, setFaultDate] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [requiredDocuments, setRequiredDocuments] = useState("");
  const [faults, setFaults] = useState([{ device: "", brand: "", description: "" }]);
  const [file, setFile] = useState(null);

  const addFaultRow = () => {
    setFaults([...faults, { device: "", brand: "", description: "" }]);
  };

  const handleFaultChange = (index, field, value) => {
    const updatedFaults = [...faults];
    updatedFaults[index][field] = value;
    setFaults(updatedFaults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Arıza bildirimi kaydedildi.");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-3">Arıza Bildirim Formu</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700">İşletme Adı:</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">İşletme Müdürü:</label>
          <input
            type="text"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">Arıza Bildirim Tarihi / Saati:</label>
          <input
            type="datetime-local"
            value={faultDate}
            onChange={(e) => setFaultDate(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">Çalışılabilecek Mesai Saatleri:</label>
          <input
            type="text"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">Giriş İzni İçin İstenen Belgeler:</label>
          <textarea
            value={requiredDocuments}
            onChange={(e) => setRequiredDocuments(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          ></textarea>

          {/* Cihaz Arızaları Tablosu */}
          <h3 className="text-md font-bold mt-4 mb-2">Arızalı Cihazlar</h3>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-sm">No</th>
                <th className="border p-2 text-sm">Arızalı Cihaz</th>
                <th className="border p-2 text-sm">Markası</th>
                <th className="border p-2 text-sm">Arıza Tanımı ve Uygunsuzluklar</th>
              </tr>
            </thead>
            <tbody>
              {faults.map((fault, index) => (
                <tr key={index} className="border">
                  <td className="border p-2 text-sm">{index + 1}</td>
                  <td className="border p-2 text-sm">
                    <input
                      type="text"
                      value={fault.device}
                      onChange={(e) => handleFaultChange(index, "device", e.target.value)}
                      placeholder="Cihaz Adı"
                      className="w-full border p-1 rounded-md"
                    />
                  </td>
                  <td className="border p-2 text-sm">
                    <input
                      type="text"
                      value={fault.brand}
                      onChange={(e) => handleFaultChange(index, "brand", e.target.value)}
                      placeholder="Marka"
                      className="w-full border p-1 rounded-md"
                    />
                  </td>
                  <td className="border p-2 text-sm">
                    <textarea
                      value={fault.description}
                      onChange={(e) => handleFaultChange(index, "description", e.target.value)}
                      placeholder="Arıza Tanımı"
                      className="w-full border p-1 rounded-md"
                    ></textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            type="button"
            onClick={addFaultRow}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md"
          >
            + Cihaz Ekle
          </button>

          {/* Dosya Ekleme */}
          <label className="block text-gray-700 mt-4">Ek Belgeler (PDF / Fotoğraf):</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border p-2 rounded-md mb-2"
          />

          {/* Butonlar */}
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
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FaultReportForm;
