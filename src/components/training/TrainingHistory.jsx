import React from "react";

const TrainingHistory = ({ trainings }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Gerçekleştirilen Eğitimler</h2>
      {trainings.length === 0 ? (
        <p className="text-gray-500">Henüz gerçekleştirilen eğitim bulunmamaktadır.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Eğitim</th>
                <th className="border px-4 py-2">Tarih</th>
                <th className="border px-4 py-2">Saat</th>
                <th className="border px-4 py-2">Süre (dk)</th>
                <th className="border px-4 py-2">Eğitmen</th>
                <th className="border px-4 py-2">Katılımcı Sayısı</th>
                <th className="border px-4 py-2">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              {trainings.map((training, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{training.selectedTraining}</td>
                  <td className="border px-4 py-2">{training.trainingDate}</td>
                  <td className="border px-4 py-2">{training.trainingTime}</td>
                  <td className="border px-4 py-2">{training.trainingDuration}</td>
                  <td className="border px-4 py-2">{training.trainer}</td>
                  <td className="border px-4 py-2">{training.participants.length}</td>
                  <td className="border px-4 py-2">{training.notes || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TrainingHistory;
