import React from 'react';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const Audit = () => {
  const audits = [
    { title: 'İç Denetim 2024-Q1', date: '15.03.2024', status: 'Planlandı' },
    { title: 'Tedarikçi Denetimi', date: '20.03.2024', status: 'Onay Bekliyor' },
    { title: 'Süreç Denetimi', date: '25.03.2024', status: 'Planlandı' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Denetimler</h1>
        <div className="flex gap-2">
          <button className="btn btn-primary">Yeni Denetim</button>
          <button className="btn btn-secondary">Denetim Takvimi</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ClipboardDocumentListIcon className="w-5 h-5 text-blue-600" />
            Planlanan Denetimler
          </h2>
          <div className="space-y-4">
            {audits.map((audit, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{audit.title}</p>
                    <p className="text-sm text-gray-500">Tarih: {audit.date}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {audit.status}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="btn btn-secondary text-sm">Detaylar</button>
                  <button className="btn btn-secondary text-sm">Düzenle</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ClipboardDocumentListIcon className="w-5 h-5 text-yellow-600" />
            Devam Eden Denetimler
          </h2>
          <div className="p-4 text-center text-gray-500">
            <p>Devam eden denetim bulunmamaktadır.</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ClipboardDocumentListIcon className="w-5 h-5 text-green-600" />
            Tamamlanan Denetimler
          </h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 hover:bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">İç Denetim 2023-Q{i}</p>
                    <p className="text-sm text-gray-500">Tamamlanma: 15.12.2023</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Tamamlandı
                  </span>
                </div>
                <div className="mt-4">
                  <button className="btn btn-secondary text-sm">Raporu Görüntüle</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;