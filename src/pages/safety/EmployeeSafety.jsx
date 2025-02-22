import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 🌟 React Router import
import {
  ClipboardDocumentCheckIcon, ExclamationTriangleIcon, UsersIcon, ShieldCheckIcon,
  FireIcon, DocumentTextIcon, AcademicCapIcon, BriefcaseIcon
} from "@heroicons/react/24/outline";
import AccidentReportForm from "@/components/safety/AccidentReportForm";

const EmployeeSafety = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const navigate = useNavigate(); // 🌟 Sayfa yönlendirmesi için React Router

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const modalContent = {
    accident: { title: "İş Kazası Bildirimi", component: <AccidentReportForm onClose={() => setIsModalOpen(null)} /> },
    emergencyTeam: { title: "Acil Durum Ekip Listesi", component: <p>Acil Durum Ekibi ve İletişim Bilgileri</p> },
    riskPlan: { title: "Risk Planı", component: <p>İşletme Risk Planı Detayları</p> },
    emergencyAction: { title: "Acil Durum Eylem Planı", component: <p>Acil Durum Eylem Planı Detayları</p> },
    inspectionNotes: { title: "Tespit ve Öneri Defteri Notları", component: <p>Tespit edilen riskler ve önerilen çözümler</p> },
    safetyTraining: { title: "İş Güvenliği Eğitim Belgeleri", component: <p>İş güvenliği eğitim katılım ve sertifika kayıtları</p> },
    assignmentLetters: { title: "Atama Yazıları", component: <p>İş güvenliğiyle ilgili görevlendirme ve atama yazıları</p> }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Sayfa Başlığı */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">İş Sağlığı ve Güvenliği</h1>
      </div>

      {/* İşlemler Butonları */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setIsModalOpen("accident")}
          className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-red-600 transition"
        >
          <ClipboardDocumentCheckIcon className="w-5 h-5" /> İş Kazası Bildirimi
        </button>

        {/* 🌟 Ramak Kala Butonu Güncellendi - Sayfa yönlendirme ekledik */}
        <button
          onClick={() => navigate("/safety/near-miss-report")}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-yellow-600 transition"
        >
          <ExclamationTriangleIcon className="w-5 h-5" /> Ramak Kala Bildirimi
        </button>

        <button
          onClick={() => setIsModalOpen("emergencyTeam")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-600 transition"
        >
          <UsersIcon className="w-5 h-5" /> Acil Durum Ekip Listesi
        </button>

        <button
          onClick={() => setIsModalOpen("riskPlan")}
          className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-green-600 transition"
        >
          <ShieldCheckIcon className="w-5 h-5" /> Risk Planı
        </button>

        <button
          onClick={() => setIsModalOpen("emergencyAction")}
          className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-orange-600 transition"
        >
          <FireIcon className="w-5 h-5" /> Acil Durum Eylem Planı
        </button>

        <button
          onClick={() => setIsModalOpen("inspectionNotes")}
          className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-purple-600 transition"
        >
          <DocumentTextIcon className="w-5 h-5" /> Tespit ve Öneri Defteri
        </button>

        <button
          onClick={() => setIsModalOpen("safetyTraining")}
          className="bg-teal-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-teal-600 transition"
        >
          <AcademicCapIcon className="w-5 h-5" /> İş Güvenliği Eğitim Belgeleri
        </button>

        <button
          onClick={() => setIsModalOpen("assignmentLetters")}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-indigo-600 transition"
        >
          <BriefcaseIcon className="w-5 h-5" /> Atama Yazıları
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto relative">
            {/* Modal Üst Bar */}
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between z-10">
              <h2 className="text-xl font-bold">{modalContent[isModalOpen].title}</h2>
              <button onClick={() => setIsModalOpen(null)} className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition">
                Kapat
              </button>
            </div>
            {/* Modal İçerik */}
            <div className="p-4">
              {modalContent[isModalOpen]?.component || <p>İçerik bulunamadı.</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeSafety;
