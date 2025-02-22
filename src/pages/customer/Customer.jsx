import React from 'react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const Customer = () => {
  const feedbacks = [
    { id: 'GRB-2024-001', customer: 'Memorial Ataşehir', type: 'Öneri', status: 'Yeni' },
    { id: 'GRB-2024-002', customer: 'Merkez Mutfak', type: 'Şikayet', status: 'İnceleniyor' },
    { id: 'GRB-2024-003', customer: 'Memorial Bahçelievler', type: 'Teşekkür', status: 'Kapatıldı' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Müşteri Geri Bildirimleri</h1>
        <div className="flex gap-2">
          <button className="btn btn-primary">Yeni Geri Bildirim</button>
          <button className="btn btn-secondary">Raporlar</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ChatBubbleLeftIcon className="w-5 h-5 text-blue-600" />
            Yeni Geri Bildirimler
          </h2>
          <div className="space-y-4">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{feedback.id}</p>
                    <p className="text-sm text-gray-500">{feedback.customer}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {feedback.type}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="btn btn-secondary text-sm">İncele</button>
                  <button className="btn btn-secondary text-sm">Yanıtla</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ChatBubbleLeftIcon className="w-5 h-5 text-yellow-600" />
            İşlemdeki Geri Bildirimler
          </h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 hover:bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">GRB-2024-00{i+3}</p>
                    <p className="text-sm text-gray-500">Memorial Şişli</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    İnceleniyor
                  </span>
                </div>
                <div className="mt-4">
                  <button className="btn btn-secondary text-sm">Detaylar</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ChatBubbleLeftIcon className="w-5 h-5 text-green-600" />
            Kapatılan Geri Bildirimler
          </h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 hover:bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">GRB-2024-00{i+5}</p>
                    <p className="text-sm text-gray-500">Memorial Ankara</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Kapatıldı
                  </span>
                </div>
                <div className="mt-4">
                  <button className="btn btn-secondary text-sm">Raporu Gör</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;