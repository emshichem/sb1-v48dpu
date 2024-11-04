import React from 'react';
import { 
  Smartphone, 
  Users, 
  Package, 
  ClipboardList, 
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: Smartphone, label: 'Phones', href: '#phones' },
  { icon: Users, label: 'Technicians', href: '#technicians' },
  { icon: Package, label: 'Parts', href: '#parts' },
  { icon: ClipboardList, label: 'Quality', href: '#quality' },
  { icon: BarChart3, label: 'Reports', href: '#reports' },
  { icon: Settings, label: 'Settings', href: '#settings' },
];

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 flex flex-col">
      <div className="flex items-center gap-3 px-2 mb-8">
        <Smartphone className="w-8 h-8 text-emerald-400" />
        <h1 className="text-xl font-bold">RefurbPro</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="flex items-center gap-3 px-2 py-2 mt-auto text-gray-400 hover:text-white transition-colors">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}