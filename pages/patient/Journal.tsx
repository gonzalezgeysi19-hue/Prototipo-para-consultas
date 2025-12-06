import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientJournal: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState('');

  const moods = [
    { icon: 'sentiment_very_satisfied', label: 'Feliz', value: 'happy' },
    { icon: 'sentiment_sad', label: 'Triste', value: 'sad' },
    { icon: 'sentiment_stressed', label: 'Ansioso', value: 'anxious' },
    { icon: 'sentiment_calm', label: 'Calmado', value: 'calm' },
    { icon: 'sentiment_frustrated', label: 'Enojado', value: 'angry' },
  ];

  const handleSave = () => {
    // In a real app, save data here
    navigate('/patient/journal/success');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur">
        <button onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-start text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">Diario de Hoy</h1>
        <div className="flex w-12 items-center justify-end">
          <button 
            onClick={handleSave}
            className="text-primary text-base font-bold shrink-0 hover:opacity-80 disabled:opacity-50"
            disabled={!selectedMood}
          >
            Guardar
          </button>
        </div>
      </header>

      <main className="flex flex-col px-4 pb-10">
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 pb-3 pt-1">
          15 de Octubre
        </p>

        <h2 className="text-lg font-bold text-left pt-4 pb-2">Selecciona tu estado de ánimo</h2>
        
        {/* Mood Chips - Horizontal Scroll */}
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar">
          {moods.map((m) => (
            <button
              key={m.value}
              onClick={() => setSelectedMood(m.value)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-3 pr-4 transition-all ${
                selectedMood === m.value
                  ? 'bg-primary/20 dark:bg-primary/30 ring-2 ring-primary'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span className={`material-symbols-outlined ${selectedMood === m.value ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>
                {m.icon}
              </span>
              <p className={`text-sm font-medium ${selectedMood === m.value ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>
                {m.label}
              </p>
            </button>
          ))}
        </div>

        {/* Text Area */}
        <div className="flex w-full flex-wrap items-end gap-4 py-3">
          <label className="flex flex-col w-full">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-base font-normal leading-normal focus:outline-0 focus:ring-1 focus:ring-primary border-none bg-white dark:bg-card-dark placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 min-h-[200px] text-slate-900 dark:text-gray-200 shadow-sm"
              placeholder="¿Cómo te sientes hoy?"
            ></textarea>
          </label>
        </div>

        {/* Tags */}
        <h2 className="text-lg font-bold text-left pt-4 pb-2">Etiquetas</h2>
        <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-lg p-2 mb-4">
          <input
            className="flex-1 bg-transparent border-none focus:ring-0 p-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 text-base font-normal text-slate-900 dark:text-white"
            placeholder="Añade una etiqueta..."
            type="text"
          />
          <button className="flex items-center justify-center bg-primary rounded-lg h-10 w-10 shrink-0 hover:bg-primary/90 text-white">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 pb-6">
          <div className="flex items-center justify-center gap-x-1.5 rounded-full bg-primary/20 dark:bg-primary/30 py-1.5 pl-3 pr-1.5">
            <p className="text-primary text-sm font-medium">Familia</p>
            <button className="flex items-center justify-center rounded-full size-5 bg-primary/30 dark:bg-primary/50 text-primary hover:bg-primary/50">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>close</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-x-1.5 rounded-full bg-primary/20 dark:bg-primary/30 py-1.5 pl-3 pr-1.5">
            <p className="text-primary text-sm font-medium">Trabajo</p>
            <button className="flex items-center justify-center rounded-full size-5 bg-primary/30 dark:bg-primary/50 text-primary hover:bg-primary/50">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>close</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientJournal;
