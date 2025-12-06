import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientBottomNav from '../../components/PatientBottomNav';

const PatientActivities: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-20">
      <header className="sticky top-0 z-10 flex h-16 items-center border-b border-gray-200 bg-white/80 px-4 backdrop-blur-sm dark:border-gray-800 dark:bg-[#101d22]/80">
        <button onClick={() => navigate('/patient/home')} className="flex size-12 items-center justify-start text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
          Actividades
        </h1>
        <button className="flex size-12 items-center justify-end text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-2xl">filter_list</span>
        </button>
      </header>

      <main className="flex-1 p-4 flex flex-col gap-4">
        {/* Pending Activity */}
        <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-card-dark">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-2xl">self_improvement</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-semibold text-slate-900 dark:text-white">Ejercicio de respiración profunda</p>
              <p className="mt-1 text-sm font-normal text-slate-500 dark:text-gray-400">Dedica 5 minutos a una respiración consciente para calmar la mente.</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pl-16 pt-2">
            <button className="text-sm font-medium text-primary hover:underline">Añadir un comentario</button>
            <button className="flex h-9 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined !text-base">check</span>
              <span>Completar</span>
            </button>
          </div>
        </div>

        {/* Pending Activity 2 */}
        <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-card-dark">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-2xl">edit_note</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-semibold text-slate-900 dark:text-white">Escribe tres cosas que agradeces hoy</p>
              <p className="mt-1 text-sm font-normal text-slate-500 dark:text-gray-400">Reflexiona sobre los aspectos positivos de tu día y anótalos.</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pl-16 pt-2">
            <button className="text-sm font-medium text-primary hover:underline">Añadir un comentario</button>
            <button className="flex h-9 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined !text-base">check</span>
              <span>Completar</span>
            </button>
          </div>
        </div>

        {/* Completed Activity */}
        <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white/70 p-4 opacity-70 dark:border-gray-800 dark:bg-card-dark/70">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-500">
              <span className="material-symbols-outlined text-2xl">check_circle</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-semibold text-slate-900 line-through dark:text-white">Paseo de 15 minutos al aire libre</p>
              <p className="mt-1 text-sm font-normal text-slate-500 dark:text-gray-400">Conecta con la naturaleza y despeja tu mente con una caminata corta.</p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 pl-16">
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Completada</span>
          </div>
        </div>

        {/* Empty State Illustration */}
        <div className="mt-6 flex flex-col items-center gap-4 rounded-xl border border-dashed border-gray-200 bg-white/50 p-8 text-center dark:border-gray-700 dark:bg-card-dark/30">
          <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-4">
             <span className="material-symbols-outlined text-4xl text-gray-400">sentiment_content</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Todo al día</p>
            <p className="text-sm font-normal text-slate-500 dark:text-gray-400 max-w-xs">No tienes nuevas actividades de tu psicólogo. ¡Buen trabajo!</p>
          </div>
        </div>
      </main>

      <PatientBottomNav />
    </div>
  );
};

export default PatientActivities;
