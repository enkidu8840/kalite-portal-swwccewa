import React from "react";
import { useParams } from "react-router-dom";

const AuditReport = () => {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Denetim Raporu</h1>
      <p>Rapor ID: {id}</p>
    </div>
  );
};

export default AuditReport;
