import React from "react";
import { useParams } from "react-router-dom";

const AuditDetails = () => {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Denetim Detayları</h1>
      <p>Denetim ID: {id}</p>
    </div>
  );
};

export default AuditDetails;
