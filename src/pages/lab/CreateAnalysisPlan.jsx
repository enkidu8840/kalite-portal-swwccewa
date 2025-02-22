import React, { useState } from "react";

const analysisPeriods = [
  { label: "Haftalık", value: 1, color: "bg-red-200", icon: "🟢" },
  { label: "2 Haftada 1", value: 2, color: "bg-orange-200", icon: "🟠" },
  { label: "Aylık", value: 3, color: "bg-yellow-200", icon: "🟡" },
  { label: "3 Aylık", value: 4, color: "bg-green-200", icon: "🟢" },
  { label: "6 Aylık", value: 6, color: "bg-blue-200", icon: "🔵" },
  { label: "Yıllık", value: 12, color: "bg-gray-200", icon: "⚫" },
];

const months = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const initialCompanies = [
  "AMERİKAN HASTANESİ", "ARÇELİK LG", "AYGAZ AGÜT", "AYGAZ ALİAĞA", "AYGAZ AMBARLI",
  "AYGAZ GENEL MÜDÜRLÜK", "AYGAZ HATAY", "AYGAZ KIRIKKALE", "AYGAZ YARIMCA", "BAYER TÜRK",
  "BİOFARMA", "ÇAMLICA İŞ MERKEZİ", "ENKA MERKEZ OFİS", "ENKA OKULLARI", "ERKAN ULU OKULLARI",
  "ETS TUR", "FİNANSBANK", "FORD OTOSAN GÖLCÜK", "FORD OTOSAN İNÖNÜ", "FORD OTOSAN SANCAKTEPE",
  "IBTECH", "KALE KALIP", "KOÇ HOLDİNG", "KOÇ OKULU", "KOÇ ÜNİVERSİTESİ", "KOÇ ÜNİVERSİTESİ HASTANESİ",
  "MESS ATAŞEHİR", "MICROSOFT", "NORAMİN", "OPERASYON MERKEZİ", "OPET FUCHS ALİAĞA", "OTOKAR",
  "SETUR GENEL MÜDÜRLÜK", "TT ANKARA", "TT SAKARYA", "TÜPRAŞ ALİAĞA", "TÜPRAŞ BATMAN",
  "TÜPRAŞ GENEL MÜDÜRLÜK", "TÜPRAŞ KIRIKKALE", "TÜPRAŞ KOCAELİ", "YAPIKREDİ PLAZA A BLOK",
  "YAPIKREDİ PLAZA D BLOK", "YEMEKHANE GENEL MÜDÜRLÜK", "YK ŞEKERPINAR BANKACILIK ÜSSÜ"
];

const AnalysisPlan = () => {
  const [availableCompanies, setAvailableCompanies] = useState(initialCompanies);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [matrix, setMatrix] = useState({});

  // İşletme seçme fonksiyonu
  const handleCompanySelect = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCompanies([...selectedCompanies, value]);
    } else {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== value));
    }
  };

  // Periyot seçimi ve işletmeleri matrise ekleme
  const handlePeriodSelect = (event) => {
    const periodValue = parseInt(event.target.value);
    const period = analysisPeriods.find((p) => p.value === periodValue);
    setSelectedPeriod(period);

    const newMatrix = { ...matrix };
    selectedCompanies.forEach((company) => {
      newMatrix[company] = months.map((month, index) =>
        index % periodValue === 0 ? { month, analysis: true, color: period.color, icon: period.icon } : { month, analysis: false }
      );
    });
    setMatrix(newMatrix);

    // Seçilen işletmeleri listeden kaldır
    setAvailableCompanies(availableCompanies.filter((c) => !selectedCompanies.includes(c)));
    setSelectedCompanies([]); // Seçili işletmeleri sıfırla
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">🔬 Akıllı Analiz Planı Oluştur</h1>

      {/* 📌 Bilgilendirme Kartı */}
      <div className="p-4 mb-4 bg-gray-100 border-l-4 border-blue-500">
        <p className="text-blue-700 text-sm">
          📌 **Renkler:** 🟢 Haftalık | 🟡 Aylık | 🔵 6 Aylık | ⚫ Yıllık  
          📌 **İşletme Seçimi:** Çoklu seçim yapabilirsiniz, seçili olanlar listeden kaldırılır.  
          📌 **Periyot Seçimi:** Seçime göre matris otomatik güncellenir.  
        </p>
      </div>

      {/* 🏭 İşletme Seçimi */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">İşletme Seç</label>
        <div className="grid grid-cols-3 gap-2 border p-2 rounded">
          {availableCompanies.map((company) => (
            <label key={company} className="flex items-center space-x-2">
              <input type="checkbox" value={company} onChange={handleCompanySelect} />
              <span>{company}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ⏳ Periyot Seçimi */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Periyot Seç</label>
        <select onChange={handlePeriodSelect} className="w-full p-2 border rounded" disabled={selectedCompanies.length === 0}>
          <option value="">Periyot Seç</option>
          {analysisPeriods.map((period) => (
            <option key={period.value} value={period.value}>{period.label}</option>
          ))}
        </select>
      </div>

      {/* 📅 Analiz Matrisi */}
      {Object.keys(matrix).length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">📅 Akıllı Analiz Planı Matrisi</h2>
          <div className="overflow-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">İşletme</th>
                  {months.map((month) => (
                    <th key={month} className="border px-4 py-2">{month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(matrix).map(([company, schedule]) => (
                  <tr key={company}>
                    <td className="border px-4 py-2 font-semibold">{company}</td>
                    {schedule.map(({ month, analysis, color, icon }) => (
                      <td key={month} className={`border px-4 py-2 text-center ${color}`}>
                        {analysis ? icon : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 🔵 Kaydet Butonu */}
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all" disabled={selectedCompanies.length === 0 || !selectedPeriod}>
        Kaydet
      </button>
    </div>
  );
};

export default AnalysisPlan;
