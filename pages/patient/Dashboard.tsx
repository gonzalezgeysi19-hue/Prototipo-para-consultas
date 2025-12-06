import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientBottomNav from '../../components/PatientBottomNav';

const PatientDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 px-4 py-3 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Jueves, 24 de Octubre</p>
          <h1 className="text-2xl font-bold">Hola, Alex</h1>
        </div>
        <button className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-2xl">notifications</span>
        </button>
      </header>

      <main className="flex-1 px-4 space-y-6">
        {/* Hero Card */}
        <section className="mt-2 relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark shadow-sm">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4Fk13pRNcLMeaZ2yFZovpeafKWMf-abDoECPnVWyI8p11mblTn7kQSzmpLPXZuq0EvDoQqsZkSEZW_w0wB571juOZTXzHb3HDS5XB-vmWkMPuRIQoYArm6nVx8V0INr8tElYPEx0xIjwU60yH9AeABBtHnXFWPnwaEXg8wavkFxJud8HUoRodzrKPQT9Co9iH0v8ousjfE2w5yfpkdZoNsD6h3bWYYOirVVsNE-yCF8_rPXHUY4bFCO-q_stjNNhIH58KkrMT0tmj")' }}
          ></div>
          <div className="relative z-[1] flex w-full flex-col items-start justify-center gap-4 p-6">
            <div>
              <h2 className="text-lg font-bold">¿Cómo te sientes hoy?</h2>
              <p className="text-base font-normal text-gray-600 dark:text-gray-400 mt-1">Tu espacio seguro para reflexionar.</p>
            </div>
            <button 
              onClick={() => navigate('/patient/journal')}
              className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-base">edit</span>
              <span className="truncate">Diario de hoy</span>
            </button>
          </div>
        </section>

        {/* Daily Summary */}
        <section>
          <h2 className="text-lg font-bold mb-3">Resumen del día</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-primary">sentiment_satisfied</span>
              <div className="text-center">
                <h3 className="text-sm font-semibold">Ánimo</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Contento</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-primary">bed</span>
              <div className="text-center">
                <h3 className="text-sm font-semibold">Sueño</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">8h</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-primary">local_fire_department</span>
              <div className="text-center">
                <h3 className="text-sm font-semibold">Energía</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Alta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pending Activities */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Actividades Pendientes</h2>
            <button 
              onClick={() => navigate('/patient/activities')}
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              Ver todo
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex cursor-pointer items-center gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm transition-transform duration-200 ease-in-out hover:scale-[1.01]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">self_improvement</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-sm sm:text-base">Ejercicio de respiración</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-1">Técnica 4-7-8</p>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">chevron_right</span>
            </div>
            <div className="flex cursor-pointer items-center gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm transition-transform duration-200 ease-in-out hover:scale-[1.01]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">article</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-sm sm:text-base">Artículo sobre ansiedad</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-1">Lectura de 5 min</p>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">chevron_right</span>
            </div>
          </div>
        </section>
      </main>

      <PatientBottomNav />
    </div>
  );
};

export default PatientDashboard;
