import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import PatientBottomNav from '../../components/PatientBottomNav';

const moodData = [
  { day: 'L', value: 3 },
  { day: 'M', value: 5 },
  { day: 'X', value: 4 },
  { day: 'J', value: 6 },
  { day: 'V', value: 2 },
  { day: 'S', value: 8 },
  { day: 'D', value: 7 },
];

const taskData = [
  { day: 'L', value: 50 },
  { day: 'M', value: 40 },
  { day: 'X', value: 80 },
  { day: 'J', value: 60 },
  { day: 'V', value: 30 },
  { day: 'S', value: 70 },
  { day: 'D', value: 90 },
];

const PatientProgress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-20">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <button onClick={() => navigate('/patient/home')} className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Mi Progreso</h2>
        <div className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined text-2xl">info</span>
        </div>
      </header>

      {/* Filters */}
      <div className="flex px-4 py-3">
        <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 p-1">
          {['Semanal', 'Mensual', 'Trimestral'].map((filter, idx) => (
            <label key={filter} className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 transition-all ${idx === 0 ? 'bg-white dark:bg-primary/20 shadow-sm text-slate-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
              <span className="truncate text-sm">{filter}</span>
              <input type="radio" name="period" className="hidden" defaultChecked={idx === 0} />
            </label>
          ))}
        </div>
      </div>

      <main className="flex flex-col gap-4 px-4 py-3">
        {/* Mood Chart */}
        <div className="flex flex-col gap-2 rounded-2xl bg-white dark:bg-card-dark p-6 shadow-sm">
          <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Resumen de Ánimo</p>
          <p className="text-primary tracking-tight text-[32px] font-bold leading-tight truncate">Promedio: Contento</p>
          <div className="flex gap-1 mb-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">Últimos 7 días</p>
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">+5%</p>
          </div>
          
          <div className="h-[160px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData}>
                <defs>
                  <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#13b6ec" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#13b6ec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} 
                  dy={10}
                />
                <Tooltip cursor={false} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#13b6ec" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorMood)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task Completion Chart */}
        <div className="flex flex-col gap-2 rounded-2xl bg-white dark:bg-card-dark p-6 shadow-sm">
          <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Tareas Completadas</p>
          <p className="text-primary tracking-tight text-[32px] font-bold leading-tight truncate">7 de 10</p>
          <div className="flex gap-1 mb-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">Últimos 7 días</p>
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">+10%</p>
          </div>
          
          <div className="h-[160px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={taskData} barSize={12}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }}
                  dy={10} 
                />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Bar 
                    dataKey="value" 
                    fill="#13b6ec" 
                    radius={[10, 10, 10, 10]} 
                    fillOpacity={0.3}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <h3 className="text-slate-900 dark:text-white text-lg font-bold px-1 pb-2 pt-2">Actividad Reciente</h3>
        
        <div className="flex flex-col gap-2 pb-4">
          {[
            { icon: 'self_improvement', title: 'Ejercicio de respiración', sub: 'Tarea de Terapia Cognitiva', time: 'Hoy' },
            { icon: 'edit_note', title: 'Diario de gratitud', sub: 'Registro de pensamientos', time: 'Ayer' },
            { icon: 'sentiment_very_satisfied', title: 'Registro de ánimo', sub: 'Entrada diaria', time: 'Ayer' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2">
               <div className="flex items-center gap-4">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">{item.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal line-clamp-1">{item.sub}</p>
                  </div>
               </div>
               <p className="text-gray-400 text-sm">{item.time}</p>
            </div>
          ))}
        </div>
      </main>

      <PatientBottomNav />
    </div>
  );
};

export default PatientProgress;
