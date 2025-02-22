import React, { useState } from "react";

const foodCategories = [
  "Ana Yemek", "Yardımcı Yemek", "Çorba", "Salata", "Tatlı",
  "Hammadde (Et)", "Hammadde (Tavuk)", "Hammadde (Peynir)",
  "İçme Suyu (Mik)", "İçme Suyu (Kim)", "Kullanma Suyu (Mik)", "Kullanma Suyu (Kim)"
];

const FoodAnalysisEntry = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleFoodSelection = (event) => {
    const { value, checked } = event.target;
    setSelectedFoods(checked ? [...selectedFoods, value] : selectedFoods.filter(f => f !== value));
  };

  const handleSubmit = () => {
    console.log({
      selectedPlan,
      selectedCompany,
      selectedFoods
    });
    alert("Analiz için yemekler başarıyla kaydedildi!");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        🍽️ Yemek Analiz Girişi
      </h1>

      {/* 📑 Analiz Planı Seçimi */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">📑 Analiz Planı Seç</label>
        <select onChange={(e) => setSelectedPlan(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Seçiniz</option>
          <option value="plan1">Ocak 2024 Planı</option>
          <option value="plan2">Şubat 2024 Planı</option>
        </select>
      </div>

      {/* 🏭 İşletme Seçimi */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">🏭 İşletme Seç</label>
        <select onChange={(e) => setSelectedCompany(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Seçiniz</option>
          <option value="company1">Aygaz Genel Müdürlük</option>
          <option value="company2">Ford Otosan Gölcük</option>
          <option value="company3">Tüpraş Batman</option>
        </select>
      </div>

      {/* 🍲 Yemek Seçimi */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">🍲 Analiz Yapılacak Yemekleri Seç</label>
        <div className="grid grid-cols-3 gap-2 border p-2 rounded">
          {foodCategories.map((food) => (
            <label key={food} className="flex items-center space-x-2">
              <input type="checkbox" value={food} onChange={handleFoodSelection} />
              <span>{food}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ✅ Kaydet Butonu */}
      <button onClick={handleSubmit} className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        ✅ Analiz Kaydet
      </button>
    </div>
  );
};

export default FoodAnalysisEntry;
