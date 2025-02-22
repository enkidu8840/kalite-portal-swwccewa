import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewAnalysisPlan = () => {
  const { id } = useParams(); // URL'den plan ID'sini al
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    // 📌 Backend'den plan verilerini çekme simülasyonu
    setPlan({ id, planName: `Plan ${id}`, period: "6 Ayda 1" });
  }, [id]);

  if (!plan) return <p>Yükleniyor...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📄 Analiz Planı Detayları</h1>
      <p><strong>Plan ID:</strong> {plan.id}</p>
      <p><strong>Plan Adı:</strong> {plan.planName}</p>
      <p><strong>Periyot:</strong> {plan.period}</p>
    </div>
  );
};

export default ViewAnalysisPlan;
