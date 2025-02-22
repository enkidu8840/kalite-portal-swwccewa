import React from "react";
import { useParams } from "react-router-dom";

const EditAudit = () => {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Denetimi Düzenle</h1>
      <p>Denetim ID: {id}</p>
    </div>
  );
};

export default EditAudit;
