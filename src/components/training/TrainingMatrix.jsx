import React, { useState } from "react";
import dayjs from "dayjs";

const months = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const currentMonthIndex = dayjs().month();

const TrainingMatrix = ({ trainings = [], onUpdate, onClose }) => {
  const [updatedTrainings, setUpdatedTrainings] = useState([...trainings]);

  const toggleMonth = (trainingIndex, monthIndex) => {
    if (monthIndex < currentMonthIndex) return;

    setUpdatedTrainings(prevTrainings =>
      prevTrainings.map((training, index) => {
        if (index === trainingIndex) {
          const updatedMonths = training.months.includes(months[monthIndex])
            ? training.months.filter(m => m !== months[monthIndex])
            : [...training.months, months[monthIndex]];
          return { ...training, months: updatedMonths };
        }
        return training;
      })
    );
  };

  const saveChanges = () => {
    onUpdate(updatedTrainings);
    onClose();
  };

  const longestTraining = trainings.reduce((longest, training) => 
    training.training.length > longest.length ? training.training : longest, "");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-[90vw] max-h-[75vh] overflow-hidden flex flex-col text-sm">
        <h2 className="text-lg font-bold mb-3 text-gray-800">Eğitim Planlama Matrisi</h2>
        <div className="flex-1 overflow-x-auto overflow-y-auto border rounded-lg relative">
          <table className="w-full min-w-[1800px] border border-gray-300">
            <thead className="sticky top-0 bg-white shadow-md z-20">
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 min-w-[${longestTraining.length * 10}px] text-left sticky left-0 bg-white shadow-md z-10">
                  Eğitim
                </th>
                {months.map((month, index) => (
                  <th key={month} className="border px-3 py-2 text-center min-w-[100px]">
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {updatedTrainings.length > 0 ? (
                updatedTrainings.map((training, trainingIndex) => (
                  <tr key={trainingIndex}>
                    <td className="border px-4 py-2 sticky left-0 bg-white shadow-md z-10">
                      {training.training}
                    </td>
                    {months.map((month, monthIndex) => (
                      <td
                        key={month}
                        className={`border px-3 py-2 text-center cursor-pointer min-w-[100px] ${
                          monthIndex < currentMonthIndex ? "bg-gray-300 cursor-not-allowed" : training.months.includes(month) ? "bg-green-400 text-white" : ""
                        }`}
                        onClick={() => toggleMonth(trainingIndex, monthIndex)}
                      >
                        {training.months.includes(month) ? "✔" : ""}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={months.length + 1} className="border px-4 py-2 text-center">
                    Eğitim verisi bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end gap-3 mt-3">
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-md">İptal</button>
          <button onClick={saveChanges} className="bg-blue-500 text-white px-4 py-2 rounded-md">Kaydet</button>
        </div>
      </div>
    </div>
  );
};

export default TrainingMatrix;
