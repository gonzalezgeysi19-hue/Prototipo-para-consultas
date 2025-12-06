import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PatientBottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: 'home', label: 'Inicio', path: '/patient/home' },
    { icon: 'edit_square', label: 'Diario', path: '/patient/journal' },
    { icon: 'checklist', label: 'Actividades', path: '/patient/activities' },
    { icon: 'trending_up', label: 'Progreso', path: '/patient/progress' },
    { icon: 'person', label: 'Ajustes', path: '/patient/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200/80 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-[#101d22]/95 safe-area-bottom">
      <div className="flex justify-around px-2 py-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex w-1/5 flex-col items-center justify-center gap-1 rounded-lg p-2 transition-colors ${
              isActive(item.path)
                ? 'text-primary'
                : 'text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary'
            }`}
          >
            <span 
              className={`material-symbols-outlined text-2xl ${isActive(item.path) ? 'filled' : ''}`}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default PatientBottomNav;
