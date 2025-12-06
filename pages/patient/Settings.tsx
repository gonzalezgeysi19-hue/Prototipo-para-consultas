import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientBottomNav from '../../components/PatientBottomNav';

const PatientSettings: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Cuenta',
      items: [
        { icon: 'person', label: 'Gestionar Perfil' },
        { icon: 'key', label: 'Cambiar Contraseña' }
      ]
    },
    {
      title: 'Notificaciones',
      items: [
        { icon: 'edit_notifications', label: 'Recordatorios de Diario', toggle: true },
        { icon: 'chat', label: 'Mensajes del Terapeuta', toggle: true, checked: false }
      ]
    },
    {
      title: 'General',
      items: [
        { icon: 'security', label: 'Privacidad y Seguridad' },
        { icon: 'language', label: 'Idioma' }
      ]
    }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-spline pb-20">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 backdrop-blur-sm">
        <button onClick={() => navigate('/patient/home')} className="flex size-12 shrink-0 items-center justify-start text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-slate-900 dark:text-white">Ajustes</h1>
        <div className="size-12 shrink-0"></div>
      </header>

      <main className="flex-1 px-4 py-4">
        {/* Profile */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="aspect-square w-20 min-w-[80px] rounded-full bg-cover bg-center bg-no-repeat shadow-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqU8vSIJ7Yr-UvTHLell5-JZsq2IUqPatkAYpAzq5jeeNuuY1Jnx4KEw9n8VFlx25D5mCIAuNn_yJDeDBOPc3mS74jgJBEwNDCL5EXCrptQgM9k_MFRtDbHsaS_v5VPs_uGEK639GTqQ8SeCBFs8ca7kulIaal8Sr1seNfgj87yajBasj-RrbGsTlOVQHW8NbZJR9bNr7xlUPonOn7EJ0oBZ1fP6JDjsE7kAmGTzYIGR6yJBkrMeSgt-EZOYhki0JTzP12bB6mw2qx")' }}></div>
              <div className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full border-2 border-background-light bg-white dark:border-background-dark dark:bg-card-dark">
                <span className="material-symbols-outlined text-base text-primary">mood</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[22px] font-bold leading-tight text-slate-900 dark:text-white">Ana García</p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">ana.garcia@email.com</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h3 className="px-2 pb-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{section.title}</h3>
              <div className="overflow-hidden rounded-2xl bg-white dark:bg-card-dark shadow-sm">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={`flex items-center justify-between gap-4 p-4 min-h-[56px] ${itemIdx !== section.items.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <p className="flex-1 truncate text-base font-normal text-slate-900 dark:text-white">{item.label}</p>
                    </div>
                    <div className="shrink-0 text-gray-400">
                      {item.toggle ? (
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input type="checkbox" className="peer sr-only" defaultChecked={item.checked !== false} />
                          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-700 dark:border-gray-600"></div>
                        </label>
                      ) : (
                        <span className="material-symbols-outlined">chevron_right</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="pt-8 pb-4">
          <button 
            onClick={() => navigate('/')}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 dark:bg-red-900/10 px-6 py-4 text-base font-semibold text-red-600 dark:text-red-400 transition-colors hover:bg-red-100 dark:hover:bg-red-900/20"
          >
            <span className="material-symbols-outlined">logout</span>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </main>

      <PatientBottomNav />
    </div>
  );
};

export default PatientSettings;
