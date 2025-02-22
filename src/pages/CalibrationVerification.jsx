import React, { useState } from "react";

const CalibrationVerification = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "", serial: "", range: "", accuracy: "", period: "", company: "", calibrationDate: "", verificationResult: "", responsiblePerson: "", months: Array(12).fill(false) }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedDevices = [...devices];
    updatedDevices[index][field] = value;
    setDevices(updatedDevices);
  };

  const handleMonthCheck = (index, monthIndex) => {
    const updatedDevices = [...devices];
    updatedDevices[index].months[monthIndex] = !updatedDevices[index].months[monthIndex];
    setDevices(updatedDevices);
  };

  const addDevice = () => {
    setDevices([...devices, { id: devices.length + 1, name: "", serial: "", range: "", accuracy: "", period: "", company: "", calibrationDate: "", verificationResult: "", responsiblePerson: "", months: Array(12).fill(false) }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kalibrasyon / Doğrulama Formu Gönderildi:", devices);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Kalibrasyon / Doğrulama</h1>
      <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">Kalibrasyon Verileri</button>
      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto relative">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Kalibrasyon / Doğrulama Verileri</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Cihaz Adı</th>
                  <th className="border border-gray-300 p-2">Seri No</th>
                  <th className="border border-gray-300 p-2">Ölçüm Aralığı</th>
                  <th className="border border-gray-300 p-2">Ölçüm Hassasiyeti</th>
                  <th className="border border-gray-300 p-2">Kalibrasyon Periyodu</th>
                  <th className="border border-gray-300 p-2">Kalibrasyon Firması</th>
                  <th className="border border-gray-300 p-2">Kalibrasyon Tarihi</th>
                  <th className="border border-gray-300 p-2">Doğrulama Sonucu</th>
                  <th className="border border-gray-300 p-2">Sorumlu Kişi</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2"><input type="text" value={device.name} onChange={(e) => handleChange(index, "name", e.target.value)} className="w-full p-1" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={device.serial} onChange={(e) => handleChange(index, "serial", e.target.value)} className="w-full p-1" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={device.range} onChange={(e) => handleChange(index, "range", e.target.value)} className="w-full p-1" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={device.accuracy} onChange={(e) => handleChange(index, "accuracy", e.target.value)} className="w-full p-1" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={device.period} onChange={(e) => handleChange(index, "period", e.target.value)} className="w-full p-1" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={device.company} onChange={(e) => handleChange(index, "company", e.target.value)} className="w-full p-1" /></td>
                    <td className="border border-gray-300 p-2"><input type="date" value={device.calibrationDate} onChange={(e) => handleChange(index, "calibrationDate", e.target.value)} className="w-full p-1" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={device.verificationResult} onChange={(e) => handleChange(index, "verificationResult", e.target.value)} className="w-full p-1" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={device.responsiblePerson} onChange={(e) => handleChange(index, "responsiblePerson", e.target.value)} className="w-full p-1" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button onClick={addDevice} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Yeni Cihaz Ekle</button>
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">Kapat</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalibrationVerification;
