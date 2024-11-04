import React from 'react';
import { Phone, Wrench, CheckCircle, AlertTriangle } from 'lucide-react';

const stats = [
  {
    icon: Phone,
    label: 'Active Repairs',
    value: '24',
    change: '+12%',
    positive: true,
  },
  {
    icon: Wrench,
    label: 'Parts in Stock',
    value: '1,284',
    change: '-8%',
    positive: false,
  },
  {
    icon: CheckCircle,
    label: 'Completed Today',
    value: '18',
    change: '+24%',
    positive: true,
  },
  {
    icon: AlertTriangle,
    label: 'Quality Issues',
    value: '3',
    change: '-15%',
    positive: true,
  },
];

export function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-6 h-6 text-gray-600" />
              <span
                className={`text-sm font-medium ${
                  stat.positive ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Recent Repairs</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">iPhone 13 Pro</p>
                  <p className="text-sm text-gray-600">Screen replacement</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800">
                  In Progress
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">iPhone 13 Screen</p>
                  <p className="text-sm text-gray-600">5 units remaining</p>
                </div>
                <button className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}