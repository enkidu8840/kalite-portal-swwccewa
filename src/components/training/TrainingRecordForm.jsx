import React, { useState } from "react";
import dayjs from "dayjs";

const months = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const TrainingRecordForm = ({ plannedTrainings, onSave, onClose }) => {
  const [selectedTraining, setSelectedTraining] = useState("");
  const [trainingDate, setTrainingDate] = useState("");
  const [trainingTime, setTrainingTime] = useState("");
  const [trainingDuration, setTrainingDuration] = useState("");
  const [trainer, setTrainer] = useState("");
  const [participants, setParticipants] = useState([{ name: "", role: "" }]);
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);

  const currentMonth = dayjs().month();
  const validTrainings = plannedTrainings.filter(training =>
    training.months.some(month => {
      const trainingMonthIndex = months.indexOf(month);
      return trainingMonthIndex === currentMonth - 1 || trainingMonthIndex === currentMonth || trainingMonthIndex === currentMonth + 1;
    })
  );

  const addParticipant = () => {
    setParticipants([...participants, { name: "", role: "" }]);
  };

  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTraining || !trainingDate || !trainingTime || !trainer) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    const newRecord = { selectedTraining, trainingDate, trainingTime, trainingDuration, trainer, participants, notes, file };
    onSave(newRecord);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[75vh] overflow-auto text-xs">
        <h2 className="text-lg font-bold mb-3 text-gray-800">Eğitim Kaydı</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <label className="block font-medium text-gray-700">Planlanan Eğitim:</label>
          <select value={selectedTraining} onChange={(e) => setSelectedTraining(e.target.value)} className="w-full border p-2 rounded-md mb-2">
            <option value="">Seçiniz</option>
            {validTrainings.length > 0 ? (
              validTrainings.map((training, index) => (
                <option key={index} value={training.training}>{training.training}</option>
              ))
            ) : (
              <option disabled>Bu dönem için planlanmış eğitim bulunmamaktadır.</option>
            )}
          </select>

          <label className="block font-medium text-gray-700">Eğitim Tarihi:</label>
          <input type="date" value={trainingDate} onChange={(e) => setTrainingDate(e.target.value)} className="w-full border p-2 rounded-md mb-2" />

          <label className="block font-medium text-gray-700">Eğitim Saati:</label>
          <input type="time" value={trainingTime} onChange={(e) => setTrainingTime(e.target.value)} className="w-full border p-2 rounded-md mb-2" />

          <label className="block font-medium text-gray-700">Süre (Dakika):</label>
          <input type="number" value={trainingDuration} onChange={(e) => setTrainingDuration(e.target.value)} className="w-full border p-2 rounded-md mb-2" />

          <label className="block font-medium text-gray-700">Eğitmen:</label>
          <input type="text" value={trainer} onChange={(e) => setTrainer(e.target.value)} className="w-full border p-2 rounded-md mb-2" />

          <label className="block font-medium text-gray-700">Katılımcılar:</label>
          {participants.map((participant, index) => (
            <div key={index} className="flex gap-2 mb-1">
              <input type="text" placeholder="Ad Soyad" value={participant.name} onChange={(e) => handleParticipantChange(index, "name", e.target.value)} className="w-full border p-2 rounded-md" />
              <input type="text" placeholder="Görevi" value={participant.role} onChange={(e) => handleParticipantChange(index, "role", e.target.value)} className="w-full border p-2 rounded-md" />
            </div>
          ))}
          <button type="button" onClick={addParticipant} className="bg-green-500 text-white px-3 py-1 rounded-md">Katılımcı Ekle</button>

          <label className="block font-medium text-gray-700 mt-3">Açıklamalar:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border p-2 rounded-md mb-2"></textarea>

          <label className="block font-medium text-gray-700 mt-3">İmzalı Form Yükle (PDF):</label>
          <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full border p-2 rounded-md mb-2" />

          <div className="flex justify-end gap-2 mt-3">
            <button onClick={onClose} type="button" className="bg-gray-400 text-white px-3 py-1 rounded-md">İptal</button>
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainingRecordForm;