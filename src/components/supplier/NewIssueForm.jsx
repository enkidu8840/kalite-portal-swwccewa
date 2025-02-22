import React, { useState } from "react";
import { CameraIcon, TrashIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

const NewIssueForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    no: "25TU0101",
    tarih: "",
    isletme: "",
    tespitTipi: "",
    musteriSikayetNo: "",
    tedarikci: "",
    ureticiMarka: "",
    urun: "",
    etiketBilgileri: "",
    uygunsuzlukKategori: "",
    uygunsuzlukAciklama: "",
    tespitEden: "",
    isletmeAksiyonu: "",
    resimler: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    
    const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024); // 📌 Maksimum 5MB
    if (validFiles.length + formData.resimler.length > 4) {
      alert("En fazla 4 resim yükleyebilirsiniz! Maksimum dosya boyutu 5MB.");
      return;
    }
    
    setFormData({ ...formData, resimler: [...formData.resimler, ...validFiles] });
  };

  const handleRemoveImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      resimler: prev.resimler.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kaydedilen Veri:", formData);
    alert("Uygunsuzluk bildirimi başarıyla kaydedildi!");
    setFormData({
      no: "25TU0101",
      tarih: "",
      isletme: "",
      tespitTipi: "",
      musteriSikayetNo: "",
      tedarikci: "",
      ureticiMarka: "",
      urun: "",
      etiketBilgileri: "",
      uygunsuzlukKategori: "",
      uygunsuzlukAciklama: "",
      tespitEden: "",
      isletmeAksiyonu: "",
      resimler: [],
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl max-h-screen overflow-y-auto relative">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">🚨 Yeni Uygunsuzluk Kaydı</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">📌 No:</label>
            <input type="text" name="no" value={formData.no} readOnly className="w-full p-2 border border-gray-300 rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="text-sm font-medium">📅 Tarih:</label>
            <input type="date" name="tarih" value={formData.tarih} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">🏭 İşletme:</label>
            <select name="isletme" value={formData.isletme} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Seçiniz</option>
              <option value="İşletme 1">İşletme 1</option>
              <option value="İşletme 2">İşletme 2</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">🔍 Tespit Tipi:</label>
            <select name="tespitTipi" value={formData.tespitTipi} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Seçiniz</option>
              <option value="Tip 1">Tip 1</option>
              <option value="Tip 2">Tip 2</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">📜 Müşteri Şikayet No:</label>
            <input type="text" name="musteriSikayetNo" value={formData.musteriSikayetNo} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">📦 Tedarikçi:</label>
            <input type="text" name="tedarikci" value={formData.tedarikci} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">🏷️ Ürün:</label>
            <input type="text" name="urun" value={formData.urun} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">🏷️ Etiket Bilgileri (PN/ÜT):</label>
            <input type="text" name="etiketBilgileri" value={formData.etiketBilgileri} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">📋 Uygunsuzluk Açıklama:</label>
            <textarea name="uygunsuzlukAciklama" value={formData.uygunsuzlukAciklama} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md h-24"></textarea>
          </div>

          <div>
            <label className="text-sm font-medium">🕵️‍♂️ Tespit Eden:</label>
            <input type="text" name="tespitEden" value={formData.tespitEden} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">✅ İşletme Aksiyonu:</label>
            <textarea name="isletmeAksiyonu" value={formData.isletmeAksiyonu} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md h-24"></textarea>
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <CameraIcon className="w-5 h-5 text-gray-600" /> Kanıtlar (Max 4 Fotoğraf, Max 5MB)
            </label>
            <input type="file" accept="image/*" multiple onChange={handleFileUpload} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md">İptal</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewIssueForm;
