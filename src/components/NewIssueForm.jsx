import React, { useState } from "react";

const NewIssueForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    no: "25TU0093",
    tarih: "",
    isletme: "",
    tespitTipi: "",
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
    if (files.length + formData.resimler.length > 4) {
      alert("En fazla 4 resim yükleyebilirsiniz!");
      return;
    }
    setFormData({ ...formData, resimler: [...formData.resimler, ...files] });
  };

  const handleRemoveImage = (index) => {
    const updatedResimler = [...formData.resimler];
    updatedResimler.splice(index, 1);
    setFormData({ ...formData, resimler: updatedResimler });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kaydedilen Veri:", formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl max-h-screen overflow-y-auto relative">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Yeni Uygunsuzluk Kaydı</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">No:</label>
            <input type="text" name="no" value={formData.no} readOnly className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">Tarih:</label>
            <input type="date" name="tarih" value={formData.tarih} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">İşletme:</label>
            <select name="isletme" value={formData.isletme} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Seçiniz</option>
              <option value="İşletme 1">İşletme 1</option>
              <option value="İşletme 2">İşletme 2</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Tespit Tipi:</label>
            <select name="tespitTipi" value={formData.tespitTipi} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Seçiniz</option>
              <option value="Tip 1">Tip 1</option>
              <option value="Tip 2">Tip 2</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Tedarikçi:</label>
            <select name="tedarikci" value={formData.tedarikci} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Seçiniz</option>
              <option value="Tedarikçi 1">Tedarikçi 1</option>
              <option value="Tedarikçi 2">Tedarikçi 2</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Ürün:</label>
            <input type="text" name="urun" value={formData.urun} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">Üretici Marka:</label>
            <input type="text" name="ureticiMarka" value={formData.ureticiMarka} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">Etiket Bilgileri (PN/ÜT):</label>
            <input type="text" name="etiketBilgileri" value={formData.etiketBilgileri} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="text-sm font-medium">Uygunsuzluk Kategorisi:</label>
            <select name="uygunsuzlukKategori" value={formData.uygunsuzlukKategori} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Seçiniz</option>
              <option value="Kategori 1">Kategori 1</option>
              <option value="Kategori 2">Kategori 2</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Uygunsuzluk Açıklama:</label>
            <textarea name="uygunsuzlukAciklama" value={formData.uygunsuzlukAciklama} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md h-24"></textarea>
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Resim Ekle (Max 4):</label>
            <input type="file" accept="image/*" multiple onChange={handleFileUpload} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          {/* Resim Önizleme ve Silme */}
          <div className="col-span-2 flex gap-2 mt-2">
            {formData.resimler.map((file, index) => (
              <div key={index} className="relative">
                <img src={URL.createObjectURL(file)} alt={`Resim ${index + 1}`} className="w-16 h-16 object-cover rounded-md border border-gray-300" />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">İşletme Aksiyonu:</label>
            <textarea name="isletmeAksiyonu" value={formData.isletmeAksiyonu} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
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
