import React from "react";

const ActionPlanList = ({ actions }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Aksiyon Planları</h2>
      {actions.length > 0 ? (
        <ul>
          {actions.map((action) => (
            <li key={action.id} className="mb-2 border-b p-2">
              <p><strong>Aksiyon:</strong> {action.aksiyon}</p>
              <p><strong>Durum:</strong> {action.durum}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Henüz aksiyon planı bulunmamaktadır.</p>
      )}
    </div>
  );
};

export default ActionPlanList;
