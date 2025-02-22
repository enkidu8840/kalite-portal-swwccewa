import React from 'react';
import { ChartBarIcon, UsersIcon, DocumentTextIcon, BeakerIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const stats = [
    { title: 'Açık Uygunsuzluklar', value: '12', icon: ChartBarIcon, color: 'text-red-600', bg: 'bg-red-100' },
    { title: 'Aktif Tedarikçiler', value: '45', icon: UsersIcon, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Bekleyen Denetimler', value: '3', icon: DocumentTextIcon, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { title: 'Laboratuvar Analizleri', value: '8', icon: BeakerIcon, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex gap-2">
          <button className="btn btn-primary">Rapor Al</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Son Aktiviteler</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Yeni Tedarikçi Uygunsuzluğu</p>
                  <p className="text-sm text-gray-500">2 saat önce</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                  Beklemede
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Yaklaşan Görevler</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">İç Denetim</p>
                  <p className="text-sm text-gray-500">3 gün kaldı</p>
                </div>
                <button className="btn btn-secondary text-sm">Detaylar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;