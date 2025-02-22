import React, { useEffect } from "react";
import BodySvg from "./BodySvg";

const BodyPartSelectorWithDetails = ({
  selectedParts,
  setSelectedParts,
  accidentDetails,
  setAccidentDetails,
}) => {
  const [isFront, setIsFront] = React.useState(true);

  const toggleSelection = (part) => {
    setSelectedParts((prev) =>
      Array.isArray(prev) && prev.includes(part)
        ? prev.filter((p) => p !== part)
        : [...(Array.isArray(prev) ? prev : []), part]
    );
  };

  const resetSelection = () => setSelectedParts([]);

  const handleKazaZarariChange = (e) => {
    setAccidentDetails({ ...accidentDetails, kazaZarari: e.target.value });
  };

  const handleKazaCinsiChange = (e) => {
    setAccidentDetails({ ...accidentDetails, kazaCinsi: e.target.value });
  };

  // selectedParts'in her zaman dizi olduğunu varsayalım:
  const safeSelectedParts = Array.isArray(selectedParts) ? selectedParts : [];

  // Seçilen bölgeler değiştiğinde, hasarYeri değerini güncelle
  useEffect(() => {
    const newHasarYeri = safeSelectedParts.join(", ");
    if (newHasarYeri !== accidentDetails.hasarYeri) {
      setAccidentDetails({ ...accidentDetails, hasarYeri: newHasarYeri });
    }
    // safeSelectedParts'i dependency array'e ekliyoruz.
  }, [safeSelectedParts, accidentDetails, setAccidentDetails]);

  return (
    <div className="p-4">
      {/* Vücut haritası ve seçilen bölgeler */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex flex-col items-center">
          <BodySvg
            selectedParts={safeSelectedParts}
            toggleSelection={toggleSelection}
            isFront={isFront}
          />
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setIsFront(!isFront)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              {isFront ? "Arka Görünüm" : "Ön Görünüm"}
            </button>
            <button
              onClick={resetSelection}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
            >
              Temizle
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <h3 className="font-bold">Seçilen Bölgeler</h3>
          <ul className="list-disc pl-4">
            {safeSelectedParts.length > 0 ? (
              safeSelectedParts.map((part) => (
                <li key={part} className="text-green-700 font-semibold">
                  {part}
                </li>
              ))
            ) : (
              <li className="text-gray-500">Henüz seçim yapılmadı.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Kaza Detayları */}
      <div className="mt-6 w-full max-w-md">
        <h3 className="font-bold mb-2">Kaza Detayları</h3>

        <div className="mb-2">
          <label className="block mb-1">Kaza Zararı</label>
          <select
            name="kazaZarari"
            onChange={handleKazaZarariChange}
            value={accidentDetails.kazaZarari}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Seçiniz</option>
            <option value="Yaralanmasız/Etkisi gözle görünmeyen">
              Yaralanmasız/Etkisi gözle görünmeyen
            </option>
            <option value="Basit Yaralanma">Basit Yaralanma</option>
            <option value="Ağır Yaralanma">Ağır Yaralanma</option>
            <option value="Uzuv Kaybı">Uzuv Kaybı</option>
            <option value="Ölümlü Kaza">Ölümlü Kaza</option>
          </select>
        </div>

        <div className="mb-2">
          <label className="block mb-1">Kaza Cinsi</label>
          <select
            name="kazaCinsi"
            onChange={handleKazaCinsiChange}
            value={accidentDetails.kazaCinsi}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Seçiniz</option>
            <option value="Çarpma">Çarpma</option>
            <option value="Düşme ve İncinme">Düşme ve İncinme</option>
            <option value="Elektrik Kazaları">Elektrik Kazaları</option>
            <option value="Ezilme ve Sıkışma">Ezilme ve Sıkışma</option>
            <option value="Kayma">Kayma</option>
            <option value="Kesik Kazaları">Kesik Kazaları</option>
            <option value="Kimyasal Yanığı">Kimyasal Yanığı</option>
            <option value="Kişisel Sağlık Problemi">
              Kişisel Sağlık Problemi
            </option>
            <option value="Yanma">Yanma</option>
            <option value="Zehirlenme">Zehirlenme</option>
            <option value="Diğer(Açıklama)">Diğer(Açıklama)</option>
          </select>
        </div>

        <div className="mb-2">
          <label className="block mb-1">Hasarın Vücuttaki Yeri</label>
          <input
            type="text"
            value={accidentDetails.hasarYeri}
            readOnly
            className="w-full p-2 border rounded-md bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyPartSelectorWithDetails;
