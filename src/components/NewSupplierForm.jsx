import React from "react";

const NewSupplierForm = ({ onClose }) => {
  return (
    <div>
      <h2>Yeni Tedarikçi Ekle</h2>
      <form>
        <label>Tedarikçi Adı:</label>
        <input type="text" className="border p-2 rounded w-full" />

        <label>İletişim:</label>
        <input type="text" className="border p-2 rounded w-full" />

        <button type="submit" className="bg-green-500 text-white p-2 mt-4 rounded">
          Kaydet
        </button>
      </form>
      <button onClick={onClose} className="mt-2 text-red-500">Kapat</button>
    </div>
  );
};

export default NewSupplierForm;
