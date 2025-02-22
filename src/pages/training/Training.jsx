import React, { useState, useEffect } from "react";
import showTrainingPlan from "@/components/training/TrainingPlanForm";
import TrainingMatrix from "@/components/training/TrainingMatrix";
import TrainingRecordForm from "@/components/training/TrainingRecordForm";
import TrainingHistory from "@/components/training/TrainingHistory";
import dayjs from "dayjs";

const currentMonth = dayjs().month();
const pastMonth = currentMonth - 1;
const nextMonth = currentMonth + 1;

const trainingData = [
  { training: "Entegre Politika Bilgilendirme ve Hatırlatma Eğitimi", months: [], instructor: "İşletme Sorumlusu", status: "Planlanan" },
  { training: "İzleme ve Ölçme Cihazları için Doğrulama ve Kalibrasyon Bilgilendirme Eğitimi", months: [], instructor: "Kalite Departmanı", status: "Planlanan" },
  { training: "ÖGP Prosedürü ve Talimatlar Eğitimi (PR.14, LS.12)", months: [], instructor: "İşletme Sorumlusu", status: "Planlanan" },
  { training: "Çevre Yönetimi Bilinçlendirme Eğitimi", months: [], instructor: "Kalite Sorumlusu", status: "Planlanan" },
  { training: "Atık Yönetimi Eğitimi (PR.18)", months: [], instructor: "İşletme Sorumlusu", status: "Planlanan" },
  { training: "Kimyasal Kullanma Eğitimi", months: [], instructor: "Diversey", status: "Planlanan" },
  { training: "Gıda Güvenliği Eğitimi", months: [], instructor: "Kalite Sorumlusu", status: "Planlanan" },
  { training: "Temel Hijyen Eğitimi", months: [], instructor: "Kalite Departmanı", status: "Planlanan" },
  { training: "Mal Kabul ve Depolama Eğitimi (TL.17, TL.19, TL.37)", months: [], instructor: "İşletme Sorumlusu", status: "Planlanan" },
  { training: "Genel Hijyen Eğitimi (TL.18, TL.24, TL.28)", months: [], instructor: "Kalite Departmanı", status: "Planlanan" },
  { training: "Temizlik ve Kimyasal Kullanma Eğitimi (PL.13, TL.23, TL.38, TL.46)", months: [], instructor: "İşletme Sorumlusu", status: "Planlanan" },
  { training: "Pest Kontrol Eğitimi", months: [], instructor: "Pest Kontrol Firması", status: "Planlanan" },
  { training: "Gıda Alerjenleri Eğitimi (TL.22)", months: [], instructor: "İşletme Sorumlusu", status: "Planlanan" },
  { training: "Acil Durum Planı, Acil Durumlara Müdahale Eğitimi", months: [], instructor: "Kalite Sorumlusu", status: "Planlanan" },
  { training: "İSG Bilinçlendirme Eğitimi (Ramak Kala, Kişisel Koruyucu Donanımlar, İSG Talimatı)", months: [], instructor: "İSG Uzmanı", status: "Planlanan" },
  { training: "Yemek Üretimi Eğitimi (TL.15, TL.16, TL.29, TL.30, TL.31, TL.32, TL.33, TL.34, TL.35, TL.36)", months: [], instructor: "İşletme Sorumlusu", status: "Planlanan" },
  { training: "İşyeri Çalışma ve Disiplin Eğitimi (TL.06)", months: [], instructor: "İşletme Sorumlusu", status: "Planlanan" }
];

const Training = () => {
  const [showTrainingPlan, setShowTrainingPlan] = useState(false);
  const [showTrainingRecord, setShowTrainingRecord] = useState(false);
  const [trainingPlan, setTrainingPlan] = useState(trainingData);
  const [trainingHistory, setTrainingHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("trainingHistory")) || [];
    setTrainingHistory(savedHistory);
  }, []);

  return (
    <div className="p-6 space-y-6 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">Eğitim Yönetimi</h1>
      <div className="flex gap-4">
        <button onClick={() => setShowTrainingPlan(true)} className="bg-blue-500 text-white px-6 py-2 rounded-md shadow">Eğitim Planlaması Yap</button>
        <button onClick={() => setShowTrainingRecord(true)} className="bg-green-500 text-white px-6 py-2 rounded-md shadow">Eğitim Kaydı Gir</button>
      </div>

      {showTrainingPlan && (
        <div className="overflow-x-auto overflow-y-auto max-h-[700px] w-full border rounded-lg shadow bg-white p-4">
          <TrainingMatrix trainings={trainingPlan} onUpdate={setTrainingPlan} onClose={() => setShowTrainingPlan(false)} />
        </div>
      )}

      {showTrainingRecord && (
        <TrainingRecordForm plannedTrainings={trainingPlan} onSave={(record) => setTrainingHistory([...trainingHistory, record])} onClose={() => setShowTrainingRecord(false)} />
      )}

      <div className="overflow-x-auto overflow-y-auto max-h-[700px] w-full border rounded-lg shadow bg-white p-4">
        <TrainingHistory trainings={trainingHistory} />
      </div>
    </div>
  );
};

export default Training;
