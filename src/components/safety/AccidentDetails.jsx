import React from "react";

const AccidentDetails = ({ accident }) => {
  if (!accident) return <p>Veri bulunamadı...</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">İş Kazası Detayları</h2>
      <p><strong>Tarih:</strong> {accident.tarih}</p>
      <p><strong>Olay Yeri:</strong> {accident.olayYeri}</p>
      <p><strong>Açıklama:</strong> {accident.açıklama}</p>
      <p><strong>Aksiyonlar:</strong> {accident.aksiyon}</p>
    </div>
  );
};

export default AccidentDetails;
