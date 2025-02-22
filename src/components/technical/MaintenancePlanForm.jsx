import React, { useState } from "react";

const MaintenancePlanForm = ({ onClose }) => {
  const [businessName, setBusinessName] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [maintenanceItems, setMaintenanceItems] = useState([
    { device: "", location: "", category: "", months: {} },
  ]);

  const categories = {
    "Mutfak Ekipmanları": ["Fırın", "Bulaşık Makinesi", "Buzdolabı", "Dondurucu", "Mikrodalga"],
    "Ofis Ekipmanları": ["Bilgisayar", "Yazıcı", "Fotokopi Makinesi", "Güvenlik Kamerası", "Sunucu"],
  };

  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  const addMaintenanceRow = () => {
    setMaintenanceItems([...maintenanceItems, { device: "", location: "", category: "", months: {} }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...maintenanceItems];
    updatedItems[index][field] = value;
    setMaintenanceItems(updatedItems);
  };

  const handleMonthChange = (index, month) => {
    const updatedItems = [...maintenanceItems];
    if (updatedItems[index].months[month]) {
      delete updatedItems[index].months[month];
    } else {
      updatedItems[index].months[month] = true;
    }
    setMaintenanceItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bakım planı kaydedildi.");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-lg font-bold mb-3">Bakım Planı Formu</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700">İşletme Adı:</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          <label className="block text-gray-700">Güncelleme Tarihi:</label>
          <input
            type="date"
            value={updateDate}
            onChange={(e) => setUpdateDate(e.target.value)}
            className="w-full border p-2 rounded-md mb-2"
          />

          {/* Scrollable Table Container */}
          <div className="overflow-x-auto max-w-full">
            <h3 className="text-md font-bold mt-4 mb-2">Cihaz Bakım Planı</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2 text-sm">Cihaz Adı</th>
                  <th className="border p-2 text-sm">Bulunduğu Alan</th>
                  <th className="border p-2 text-sm">Cihaz Sınıfı</th>
                  {months.map((month) => (
                    <th key={month} className="border p-2 text-sm">{month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {maintenanceItems.map((item, index) => (
                  <tr key={index} className="border">
                    {/* Cihaz Adı */}
                    <td className="border p-2 text-sm">
                      <input
                        type="text"
                        value={item.device}
                        onChange={(e) => handleItemChange(index, "device", e.target.value)}
                        placeholder="Cihaz Adı"
                        className="w-full border p-1 rounded-md"
                      />
                    </td>
                    {/* Bulunduğu Alan */}
                    <td className="border p-2 text-sm">
                      <input
                        type="text"
                        value={item.location}
                        onChange={(e) => handleItemChange(index, "location", e.target.value)}
                        placeholder="Bulunduğu Alan"
                        className="w-full border p-1 rounded-md"
                      />
                    </td>
                    {/* Cihaz Sınıfı */}
                    <td className="border p-2 text-sm">
                      <select
                        value={item.category}
                        onChange={(e) => handleItemChange(index, "category", e.target.value)}
                        className="w-full border p-1 rounded-md"
                      >
                        <option value="">Seçiniz</option>
                        {Object.keys(categories).map((category) => (
                          <optgroup key={category} label={category}>
                            {categories[category].map((device) => (
                              <option key={device} value={device}>{device}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </td>
                    {/* Aylık Bakım Seçimi */}
                    {months.map((month, monthIndex) => (
                      <td key={monthIndex} className="border p-2 text-center">
                        <input
                          type="checkbox"
                          checked={!!item.months[month]}
                          onChange={() => handleMonthChange(index, month)}
                          className="h-4 w-4"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cihaz Ekle Butonu */}
          <button
            type="button"
            onClick={addMaintenanceRow}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md"
          >
            + Cihaz Ekle
          </button>

          {/* Butonlar */}
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={onClose}
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              İptal
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MaintenancePlanForm;
