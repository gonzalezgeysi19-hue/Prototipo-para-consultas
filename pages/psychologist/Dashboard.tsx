import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATIENTS } from '../../constants';

const PsychologistDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display max-w-md mx-auto shadow-2xl">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-24 items-end bg-background-light/95 px-6 pb-4 backdrop-blur-lg dark:bg-background-dark/95">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">¡Hola, Dr. López!</p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white">Mis Pacientes</h1>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white dark:bg-card-dark text-slate-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700"
          >
            <span className="material-symbols-outlined text-2xl">person</span>
          </button>
        </div>
      </header>

      {/* Search */}
      <div className="px-6 py-3">
        <div className="relative group">
          <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary-psych transition-colors">search</span>
          <input
            className="flex h-12 w-full min-w-0 resize-none overflow-hidden rounded-xl border-none bg-white dark:bg-card-dark text-base font-normal text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-primary-psych/50 pl-12 pr-4 shadow-sm"
            placeholder="Buscar paciente por nombre"
          />
        </div>
      </div>

      <main className="flex-1 space-y-3 px-6 py-2 pb-24">
        {PATIENTS.map((patient) => (
          <div 
            key={patient.id}
            onClick={() => navigate(`/psychologist/patient/${patient.id}`)}
            className="flex min-h-[80px] cursor-pointer items-center gap-4 rounded-2xl bg-white dark:bg-card-dark p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            {patient.avatarUrl ? (
              <img className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-white dark:ring-gray-700" src={patient.avatarUrl} alt={patient.name} />
            ) : (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-psych/20 ring-2 ring-white dark:ring-gray-700">
                 <span className="text-lg font-bold text-primary-psych">{patient.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-slate-900 dark:text-white truncate">{patient.name}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{patient.lastActivity}</p>
            </div>
            
            <div className="flex shrink-0 items-center justify-center gap-2">
              {patient.status === 'active' && (
                <div className="size-2.5 rounded-full bg-primary-psych shadow-[0_0_8px] shadow-primary-psych/50"></div>
              )}
              <span className="material-symbols-outlined text-2xl text-gray-300 dark:text-gray-600">chevron_right</span>
            </div>
          </div>
        ))}
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-20 md:absolute">
        <button className="flex size-16 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-primary-psych text-white shadow-lg shadow-primary-psych/40 transition-transform hover:scale-105 active:scale-95">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
    </div>
  );
};

export default PsychologistDashboard;
