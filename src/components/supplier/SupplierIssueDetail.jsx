import React, { useEffect, useState } from "react";

const SupplierIssueDetail = ({ issue, onClose }) => {
  if (!issue) return null;

  const [selectedImage, setSelectedImage] = useState(null);

  // ESC ile çıkışı sağla
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Uygunsuzluk Detayı - {issue.no}</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Tarih:</strong> {issue.date}</p>
            <p><strong>İşletme:</strong> {issue.business}</p>
            <p><strong>Tedarikçi:</strong> {issue.supplier}</p>
            <p><strong>Üretici Marka:</strong> {issue.manufacturer}</p>
            <p><strong>Ürün:</strong> {issue.product}</p>
            <p><strong>Etiket Bilgileri:</strong> {issue.labelInfo}</p>
          </div>
          <div>
            <p><strong>Uygunsuzluk Kategorisi:</strong> {issue.category}</p>
            <p><strong>Açıklama:</strong> {issue.description}</p>
            <p><strong>Tespit Eden:</strong> {issue.detectedBy}</p>
            <p><strong>İşletme Aksiyonu:</strong> {issue.action}</p>
            <p><strong>Durum:</strong> <span className="font-bold">{issue.status}</span></p>
          </div>
        </div>

        {/* Resimler */}
        {issue.images?.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Resimler</h3>
            <div className="grid grid-cols-4 gap-2">
              {issue.images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`Resim ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-md border cursor-pointer hover:scale-105 transition"
                    onClick={() => setSelectedImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* İşlem Geçmişi (Varsa) */}
        {issue.actions?.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">İşlem Geçmişi</h3>
            <ul className="list-disc pl-5">
              {issue.actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Büyütülmüş Resim Modalı */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative">
              <img src={selectedImage} alt="Büyük Resim" className="max-w-3xl max-h-96 rounded-lg shadow-lg" />
              <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full">
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Kapat Butonu */}
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierIssueDetail;
