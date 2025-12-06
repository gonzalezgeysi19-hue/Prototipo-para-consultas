import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-end">
        <button 
          onClick={() => navigate('/patient/home')}
          className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
      </div>
      
      <div className="flex flex-1 flex-col justify-center items-center px-4 -mt-20">
        <div className="flex w-full justify-center pb-8 pt-4 animate-bounce-slow">
          <div className="flex items-center justify-center bg-primary/20 rounded-full size-32">
            <span className="material-symbols-outlined text-primary text-[80px]">check_circle</span>
          </div>
        </div>
        <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-4xl font-bold leading-tight px-4 text-center pb-3">
          ¡Diario Guardado!
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-lg font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-sm">
          Has dado un paso más en tu camino de bienestar. ¡Sigue así!
        </p>
      </div>

      <div className="flex px-4 py-6 w-full mt-auto mb-8">
        <button 
          onClick={() => navigate('/patient/home')}
          className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-white text-lg font-bold leading-normal shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95"
        >
          <span className="truncate">Volver al Inicio</span>
        </button>
      </div>
    </div>
  );
};

export default PatientSuccess;
