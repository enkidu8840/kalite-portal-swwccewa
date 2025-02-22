import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Supplier from "./pages/supplier/Supplier";
import Customer from "./pages/customer/Customer";
import Documentation from "./pages/quality/Documentation";
import Audit from "./pages/quality/Audit";
import Surveillance from "./pages/quality/Surveillance";
import Training from "./pages/training/Training";
import Laboratory from "./pages/lab/Laboratory";
import DFProcess from "./pages/quality/DFProcess";
import ManagementReview from "./pages/quality/ManagementReview";
import FST from "./pages/quality/FoodSafetyTeam";
import WorkplaceSafety from "./pages/safety/EmployeeSafety";
import MaintenanceProcess from "./pages/technical/MaintenanceProcess";
import CalibrationVerification from "./pages/technical/CalibrationVerification";
import IncidentEmergency from "./pages/safety/IncidentEmergency";
import Recall from "./pages/risk/Recall";
import PotentialHazard from "./pages/risk/PotentialHazard";
import Disposal from "./pages/risk/Disposal";

// 📌 Laboratuvar süreçleri
import AnalysisManagement from "./pages/lab/AnalysisManagement";
import AnalysisMatrix from "./pages/lab/AnalysisMatrix";
import EnterAnalysisResult from "./pages/lab/EnterAnalysisResult";
import UploadLabReport from "./pages/lab/UploadLabReport";
import InternalLabAnalysis from "./pages/lab/InternalLabAnalysis";
import CreateAnalysisPlan from "./pages/lab/CreateAnalysisPlan";
import EditAnalysisPlan from "./pages/lab/EditAnalysisPlan";
import ViewAnalysisPlan from "./pages/lab/ViewAnalysisPlan";

// 📌 Yeni eklenen Yemek Analiz Girişi sayfası
import FoodAnalysisEntry from "./pages/lab/FoodAnalysisEntry";

// 📌 Yeni eklenen **Ramak Kala Bildirim Formu** sayfası
import NearMissReport from "./pages/safety/NearMissReport";

const appRoutes = [
  { path: "/", element: <Dashboard /> },
  { path: "/supplier", element: <Supplier /> },
  { path: "/customer", element: <Customer /> },
  { path: "/documentation", element: <Documentation /> },
  { path: "/audit", element: <Audit /> },
  { path: "/surveillance", element: <Surveillance /> },
  { path: "/training", element: <Training /> },
  { path: "/food-safety-team", element: <FST /> },
  { path: "/laboratory", element: <Laboratory /> },
  { path: "/df-process", element: <DFProcess /> },
  { path: "/management-review", element: <ManagementReview /> },
  { path: "/workplace-safety", element: <WorkplaceSafety /> },
  { path: "/maintenance-process", element: <MaintenanceProcess /> },
  { path: "/calibration-verification", element: <CalibrationVerification /> },
  { path: "/incident-emergency", element: <IncidentEmergency /> },
  { path: "/recall", element: <Recall /> },
  { path: "/potential-hazard", element: <PotentialHazard /> },
  { path: "/disposal", element: <Disposal /> },

  // 📌 Laboratuvar Süreçleri
  { path: "/lab/analysis-management", element: <AnalysisManagement /> },
  { path: "/lab/analysis-matrix", element: <AnalysisMatrix /> },
  { path: "/lab/enter-analysis-result", element: <EnterAnalysisResult /> },
  { path: "/lab/upload-lab-report", element: <UploadLabReport /> },
  { path: "/lab/internal-analysis", element: <InternalLabAnalysis /> },
  { path: "/lab/create-analysis-plan", element: <CreateAnalysisPlan /> },
  { path: "/lab/edit-analysis-plan", element: <EditAnalysisPlan /> },
  { path: "/lab/view-analysis-plan", element: <ViewAnalysisPlan /> },

  // 📌 Yeni eklenen **Yemek Analiz Girişi** sayfası
  { path: "/lab/food-analysis-entry", element: <FoodAnalysisEntry /> },

  // 📌 Yeni eklenen **Ramak Kala Bildirim Formu** sayfası
  { path: "/safety/near-miss-report", element: <NearMissReport /> },
  
];

export default appRoutes;
