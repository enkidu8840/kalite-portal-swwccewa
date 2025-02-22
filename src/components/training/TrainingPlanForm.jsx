import React, { useState } from "react";

const TrainingPlanForm = ({ onClose, onSave }) => {
  const [selectedTraining, setSelectedTraining] = useState("");
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const trainingOptions = [
    "Genel Hijyen Eğitimi",
    "Temizlik ve Kimyasal Kullanma Eğitimi",
    "Pest Kontrol Eğitimi",
    "Gıda Alerjenleri Eğitimi",
    "Acil Durum Planı",
    "İSG Bilgilendirme Eğitimi",
    "Yemek Üretimi Eğitimi",
    "İşyeri Çalışma ve Disiplin Eğitimi",
  ];

  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  const toggleMonthSelection = (month) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTraining || selectedMonths.length === 0) {
      alert("Lütfen eğitim ve ay seçin.");
      return;
    }
    onSave({ training: selectedTraining, months: selectedMonths, year: selectedYear });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Eğitim Planlama</h2>
        <form onSubmit={handleSubmit}>
          <label className="block font-medium">Eğitim Seç:</label>
          <select
            value={selectedTraining}
            onChange={(e) => setSelectedTraining(e.target.value)}
            className="w-full border p-2 rounded-md mb-4"
          >
            <option value="">Seçiniz</option>
            {trainingOptions.map((training) => (
              <option key={training} value={training}>{training}</option>
            ))}
          </select>

          <label className="block font-medium">Planlanan Yıl:</label>
          <input
            type="number"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full border p-2 rounded-md mb-4"
            min="2020"
            max="2030"
          />

          <label className="block font-medium">Planlanan Aylar:</label>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {months.map((month) => (
              <button
                type="button"
                key={month}
                className={`px-3 py-2 rounded-md border ${
                  selectedMonths.includes(month) ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => toggleMonthSelection(month)}
              >
                {month}
              </button>
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-md">
              İptal
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainingPlanForm;
