import React, { useState } from "react";

const emergencyDocuments = [
  { id: 1, title: "Acil Durum Planı", description: "Acil durum yönetimi için prosedürler ve yönergeler.", link: "/documents/emergency-plan.pdf" },
  { id: 2, title: "İSG Acil Durum Planı", description: "İş sağlığı ve güvenliği kapsamında acil durum planı.", link: "/documents/ohs-emergency-plan.pdf" },
  { id: 3, title: "Olay ve Acil Durum Formu", description: "Acil durumların kayıt altına alınması için form.", link: "/documents/emergency-form.pdf" },
  { id: 4, title: "İş Kazası Tutanağı", description: "İş kazalarının raporlanması için gerekli form.", link: "/documents/incident-report.pdf" },
  { id: 5, title: "Ramak Kala Raporlama Formu", description: "Olası kazaların raporlanması için form.", link: "/documents/near-miss-report.pdf" },
  { id: 6, title: "Kaza Analiz Formu", description: "İş kazalarının analiz edilmesi için kullanılan form.", link: "/documents/accident-analysis.pdf" },
  { id: 7, title: "Tatbikat Formu", description: "Acil durum tatbikatlarının kayıt altına alınması için form.", link: "/documents/drill-form.pdf" }
];

const responsibleParties = [
  "Yönetim Temsilcisi",
  "İşveren Vekili",
  "Çalışan Temsilcisi",
  "Acil Durum Ekipleri",
  "İş Güvenliği Uzmanı",
  "İşyeri Hekimi",
  "İnsan Kaynakları Sorumlusu",
  "Kalite Departmanı",
  "İşletme Sorumlusu"
];

const IncidentEmergency = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Olay ve Acil Durum Yönetimi</h1>
      
      <p className="text-gray-700 mb-4">
        Bu prosedür, işletmelerde meydana gelen acil durumlar, iş kazaları ve olaylarla ilgili süreçleri
        kapsar. Amaç, bu tür durumların yönetilmesini, uygun düzeltici faaliyetlerin gerçekleştirilmesini
        ve kayıt altına alınmasını sağlamaktır.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">İlgili Dokümanlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencyDocuments.map((doc) => (
          <div
            key={doc.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => setSelectedDoc(doc)}
          >
            <h3 className="text-xl font-semibold text-gray-800">{doc.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{doc.description}</p>
          </div>
        ))}
      </div>

      {selectedDoc && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold">{selectedDoc.title}</h2>
            <p className="mt-2 text-gray-700">{selectedDoc.description}</p>
            <a
              href={selectedDoc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition"
            >
              Dokümanı Görüntüle
            </a>
            <button
              className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
              onClick={() => setSelectedDoc(null)}
            >
              Kapat
            </button>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-8 mb-3">Sorumlular</h2>
      <ul className="list-disc list-inside text-gray-700">
        {responsibleParties.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Uygulama Adımları</h2>
      <ol className="list-decimal list-inside text-gray-700">
        <li>Acil durumların tanımlanması ve risk analizlerinin yapılması.</li>
        <li>Acil durum ekipleri tarafından belirlenen önlemlerin uygulanması.</li>
        <li>İş kazası ve olayların kayıt altına alınarak detaylı incelemeler yapılması.</li>
        <li>İlgili formlar ile kayıtların tutulması ve düzeltici faaliyetlerin başlatılması.</li>
        <li>Yıllık tatbikatların düzenlenmesi ve etkinliğin değerlendirilmesi.</li>
        <li>Gerekli durumlarda sağlık, itfaiye ve belediye gibi resmi kuruluşlarla iletişime geçilmesi.</li>
      </ol>
    </div>
  );
};

export default IncidentEmergency;
