import React, { useState } from "react";
import FaultReportForm from "../components/FaultReportForm";
import MaintenancePlanForm from "../components/MaintenancePlanForm";
import DeviceMaintenanceForm from "../components/DeviceMaintenanceForm";
import ChangeRequestForm from "../components/ChangeRequestForm";

const MaintenanceProcess = () => {
  const [showFaultForm, setShowFaultForm] = useState(false);
  const [showMaintenancePlanForm, setShowMaintenancePlanForm] = useState(false);
  const [showDeviceMaintenanceForm, setShowDeviceMaintenanceForm] = useState(false);
  const [showChangeRequestForm, setShowChangeRequestForm] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-md mt-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Bakım / Onarım Süreci</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button onClick={() => setShowFaultForm(true)} className="btn bg-blue-500 text-white">Arıza Bildirim</button>
        <button onClick={() => setShowMaintenancePlanForm(true)} className="btn bg-green-500 text-white">Bakım Planı</button>
        <button onClick={() => setShowDeviceMaintenanceForm(true)} className="btn bg-yellow-500 text-white">Cihaz Bakımı</button>
        <button onClick={() => setShowChangeRequestForm(true)} className="btn bg-red-500 text-white">Değişiklik Talebi</button>
      </div>

      {showFaultForm && <FaultReportForm onClose={() => setShowFaultForm(false)} />}
      {showMaintenancePlanForm && <MaintenancePlanForm onClose={() => setShowMaintenancePlanForm(false)} />}
      {showDeviceMaintenanceForm && <DeviceMaintenanceForm onClose={() => setShowDeviceMaintenanceForm(false)} />}
      {showChangeRequestForm && <ChangeRequestForm onClose={() => setShowChangeRequestForm(false)} />}
    </div>
  );
};

export default MaintenanceProcess;
