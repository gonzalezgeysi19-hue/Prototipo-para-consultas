import React from 'react';
import { useNavigate } from 'react-router-dom';

const PsychologistCreateActivity: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-spline pb-32 max-w-md mx-auto shadow-2xl">
      <header className="sticky top-0 z-10 flex h-16 items-center bg-background-light/95 dark:bg-background-dark/95 px-4 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-start text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-slate-900 dark:text-white">Crear Actividad</h1>
        <button onClick={() => navigate(-1)} className="text-gray-500 dark:text-gray-400 text-sm font-bold px-2">
            Cancelar
        </button>
      </header>

      <main className="flex-1 space-y-6 px-6 pt-6">
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 dark:text-white text-base font-semibold" htmlFor="activity-title">
            Título de la actividad
          </label>
          <input
            id="activity-title"
            className="flex h-14 w-full rounded-2xl border-none bg-white dark:bg-card-dark px-4 text-base font-medium text-slate-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary-psych shadow-sm"
            placeholder="Ej: Ejercicio de respiración"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-slate-900 dark:text-white text-base font-semibold" htmlFor="activity-instructions">
            Instrucciones
          </label>
          <textarea
            id="activity-instructions"
            className="flex min-h-[160px] w-full resize-none rounded-2xl border-none bg-white dark:bg-card-dark p-4 text-base font-medium text-slate-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary-psych shadow-sm"
            placeholder="Describe los pasos que debe seguir el paciente..."
          ></textarea>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-white dark:bg-card-dark p-4 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-psych/10 text-primary-psych">
                <span className="material-symbols-outlined">calendar_today</span>
              </div>
              <p className="flex-1 text-base font-medium text-slate-900 dark:text-white">Fecha límite (Opcional)</p>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>

          <div className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-white dark:bg-card-dark p-4 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-psych/10 text-primary-psych">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-medium text-slate-900 dark:text-white">Asignar a</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ana Martínez</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/90 dark:via-background-dark/90 to-transparent max-w-md mx-auto">
        <button 
          onClick={() => navigate('/psychologist/patient/1')}
          className="flex h-14 w-full items-center justify-center rounded-2xl bg-primary-psych text-lg font-bold text-white shadow-xl shadow-primary-psych/30 transition-transform active:scale-95 hover:bg-primary-psych/90"
        >
          Crear Actividad
        </button>
      </footer>
    </div>
  );
};

export default PsychologistCreateActivity;
