import React, { useState } from "react";

const NearMissForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    tarih: "",
    saat: "",
    olayYeri: "",
    açıklama: "",
    aksiyon: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Ramak Kala Olay Bildirimi</h2>
      <label className="block mb-2">
        Tarih:
        <input type="date" name="tarih" value={formData.tarih} onChange={handleChange} className="w-full p-2 border" />
      </label>
      <label className="block mb-2">
        Saat:
        <input type="time" name="saat" value={formData.saat} onChange={handleChange} className="w-full p-2 border" />
      </label>
      <label className="block mb-2">
        Olay Yeri:
        <input type="text" name="olayYeri" value={formData.olayYeri} onChange={handleChange} className="w-full p-2 border" />
      </label>
      <label className="block mb-2">
        Açıklama:
        <textarea name="açıklama" value={formData.açıklama} onChange={handleChange} className="w-full p-2 border"></textarea>
      </label>
      <label className="block mb-2">
        Aksiyon:
        <input type="text" name="aksiyon" value={formData.aksiyon} onChange={handleChange} className="w-full p-2 border" />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-3">Kaydet</button>
    </form>
  );
};

export default NearMissForm;
