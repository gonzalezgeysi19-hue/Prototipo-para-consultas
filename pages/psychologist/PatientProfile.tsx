import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PATIENTS } from '../../constants';

const PsychologistPatientProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = PATIENTS.find(p => p.id === id) || PATIENTS[0];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display max-w-md mx-auto shadow-2xl">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <button onClick={() => navigate('/psychologist/home')} className="flex size-12 shrink-0 items-center justify-start text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight flex-1 text-center text-slate-900 dark:text-white">Perfil de Paciente</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex size-12 cursor-pointer items-center justify-center text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>

      <main className="flex-1 pb-10">
        {/* Profile Card */}
        <div className="flex flex-col items-center p-6 gap-4">
          <div className="relative">
             <div 
                className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 border-4 border-white dark:border-card-dark shadow-lg" 
                style={{ backgroundImage: `url("${patient.avatarUrl || 'https://ui-avatars.com/api/?name=' + patient.name}")` }}
            ></div>
            <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white dark:border-card-dark"></div>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{patient.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Activa desde {patient.activeSince}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Total de sesiones: {patient.totalSessions}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-6 pb-6">
          <button 
            onClick={() => navigate('/psychologist/create-activity')}
            className="flex w-full h-14 items-center justify-center rounded-2xl bg-primary-psych text-white font-bold text-lg shadow-lg shadow-primary-psych/30 hover:bg-primary-psych/90 transition-all active:scale-95"
          >
            Crear Nueva Actividad
          </button>
        </div>

        {/* Tabs */}
        <div className="sticky top-[72px] bg-background-light dark:bg-background-dark z-10 px-4">
          <div className="flex border-b border-gray-200 dark:border-gray-800">
            <button className="flex-1 pb-3 pt-2 text-primary-psych border-b-[3px] border-primary-psych font-bold text-sm">
                Resumen de Diarios
            </button>
            <button className="flex-1 pb-3 pt-2 text-gray-400 border-b-[3px] border-transparent font-bold text-sm">
                Actividades
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
          {[
            { date: '24 de Julio, 2024', tags: 'Ansiedad, Trabajo', preview: 'Hoy fue un día particularmente difícil en la oficina...' },
            { date: '22 de Julio, 2024', tags: 'Reflexión, Calma', preview: 'Pude tomarme un tiempo para mí después de mucho tiempo...' },
            { date: '20 de Julio, 2024', tags: 'Tristeza, Familia', preview: 'Una conversación con mi madre me dejó pensando mucho...' },
            { date: '18 de Julio, 2024', tags: 'Gratitud', preview: 'Hoy quiero agradecer por las pequeñas cosas...' }
          ].map((entry, idx) => (
            <div key={idx} className="flex gap-4 p-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-card-dark group-hover:bg-white dark:group-hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">book</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <div className="flex justify-between items-start">
                    <p className="text-base font-bold text-slate-900 dark:text-white">{entry.date}</p>
                    <span className="material-symbols-outlined text-gray-300 text-xl">chevron_right</span>
                </div>
                <p className="text-xs font-semibold text-primary-psych mt-0.5">Etiquetas: {entry.tags}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">{entry.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PsychologistPatientProfile;
