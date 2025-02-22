import React, { useState } from "react";
import { CameraIcon, TrashIcon, PaperClipIcon, CalendarIcon, ClockIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

const NearMissReport = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    observer: "",
    role: "",
    incidentType: "",
    location: "",
    workDuringIncident: "",
    involvedItems: "",
    files: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Hata temizleme
  };

  const handleFileChange = (e) => {
    if (formData.files.length >= 4) {
      alert("Maksimum 4 fotoğraf ekleyebilirsiniz!");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...Array.from(e.target.files)],
    }));
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Tarih gereklidir!";
    if (!formData.time) newErrors.time = "Saat gereklidir!";
    if (!formData.observer) newErrors.observer = "Tespit eden kişi gereklidir!";
    if (!formData.incidentType) newErrors.incidentType = "Olay tipi belirtilmelidir!";
    if (!formData.location) newErrors.location = "Olay yeri belirtilmelidir!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("🚨 Ramak Kala Formu Gönderildi:", formData);
    alert("Ramak Kala bildirimi başarıyla kaydedildi!");

    // Formu temizleme
    setFormData({
      date: "",
      time: "",
      observer: "",
      role: "",
      incidentType: "",
      location: "",
      workDuringIncident: "",
      involvedItems: "",
      files: [],
    });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold flex items-center gap-2 text-yellow-600">
        <ExclamationCircleIcon className="w-8 h-8" /> Ramak Kala Raporlama Formu
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Tarih & Saat */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-600" /> Olay Tarihi
            </label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
            {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
          </div>

          <div>
            <label className="block font-semibold flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-gray-600" /> Olay Saati
            </label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded" required />
            {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
          </div>
        </div>

        {/* Kişisel Bilgiler */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">🧑‍💼 Olayı Tespit Eden Kişi</label>
            <input type="text" name="observer" value={formData.observer} onChange={handleChange} className="w-full p-2 border rounded" required />
            {errors.observer && <p className="text-red-500 text-xs">{errors.observer}</p>}
          </div>

          <div>
            <label className="block font-semibold">📌 Görevi</label>
            <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Olay Detayları */}
        <div>
          <label className="block font-semibold">🔥 Ramak Kala Olay Tipi</label>
          <input type="text" name="incidentType" value={formData.incidentType} onChange={handleChange} className="w-full p-2 border rounded" required />
          {errors.incidentType && <p className="text-red-500 text-xs">{errors.incidentType}</p>}
        </div>

        <div>
          <label className="block font-semibold">📍 Olayın Yaşandığı Yer</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
          {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
        </div>

        {/* Fotoğraf Yükleme */}
        <div>
          <label className="block font-semibold flex items-center gap-2">
            <CameraIcon className="w-5 h-5 text-gray-600" /> Kanıtlar (Max 4 Fotoğraf)
          </label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" multiple />
          <p className="text-xs text-gray-500">Yüklenen: {formData.files.length} / 4</p>

          {/* Fotoğraf Önizleme */}
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.files.map((file, index) => (
              <div key={index} className="relative border p-2 rounded bg-gray-100 flex items-center">
                <img src={URL.createObjectURL(file)} alt="preview" className="w-16 h-16 object-cover rounded mr-2" />
                <button type="button" onClick={() => removeFile(index)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Gönder Butonu */}
        <button type="submit" className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
          🚨 Bildirimi Kaydet
        </button>
      </form>
    </div>
  );
};

export default NearMissReport;
