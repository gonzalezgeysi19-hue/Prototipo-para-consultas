import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'patient' | 'psychologist'>('patient');

  const handleLogin = () => {
    if (role === 'patient') {
      navigate('/patient/home');
    } else {
      navigate('/psychologist/home');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-white pb-10">
      <div className="flex w-full max-w-md flex-col items-center p-4 pt-16 sm:pt-24">
        <div className="flex items-center justify-center mb-8">
          <span className="material-symbols-outlined text-primary text-5xl mr-2">spa</span>
          <span className="text-4xl font-bold">Yuno</span>
        </div>
        
        <h1 className="tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-2">
          Bienvenido/a a Yuno
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal pb-8 px-4 text-center">
          Tu espacio seguro para sanar
        </p>

        {/* Role Switcher */}
        <div className="w-full px-4 py-3">
          <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-200/60 dark:bg-card-dark p-1">
            <button
              onClick={() => setRole('patient')}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all duration-200 ${
                role === 'patient' 
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-slate-900 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-200'
              }`}
            >
              Paciente
            </button>
            <button
              onClick={() => setRole('psychologist')}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all duration-200 ${
                role === 'psychologist' 
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-slate-900 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-200'
              }`}
            >
              Psicólogo
            </button>
          </div>
        </div>

        <div className="w-full px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-sm font-medium leading-normal pb-2">Correo Electrónico</p>
            <input
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary/80 dark:focus:border-primary/80 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-shadow duration-200"
              placeholder="tucorreo@ejemplo.com"
              type="email"
              defaultValue={role === 'patient' ? "ana.garcia@email.com" : "dr.lopez@email.com"}
            />
          </label>
        </div>

        <div className="w-full px-4 pt-3 pb-1">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-sm font-medium leading-normal pb-2">Contraseña</p>
            <div className="relative flex w-full flex-1 items-stretch">
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary/80 dark:focus:border-primary/80 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-shadow duration-200"
                placeholder="Introduce tu contraseña"
                type="password"
                defaultValue="password123"
              />
              <button
                aria-label="Mostrar contraseña"
                className="absolute right-0 top-0 flex h-full items-center justify-center pr-4 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </label>
        </div>

        <div className="w-full px-4 py-1 text-right">
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Olvidé mi contraseña
          </button>
        </div>

        <div className="w-full px-4 pt-6 pb-4">
          <button
            onClick={handleLogin}
            className={`flex h-14 w-full items-center justify-center rounded-xl px-6 text-base font-bold text-white shadow-lg transition-all ${
                role === 'patient' ? 'bg-primary shadow-primary/20 hover:bg-primary/90' : 'bg-primary-psych shadow-primary-psych/20 hover:bg-primary-psych/90'
            }`}
          >
            Iniciar Sesión
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 py-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">¿No tienes una cuenta?</p>
          <button className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">
            Regístrate aquí
          </button>
        </div>

        <div className="relative flex items-center w-full px-4 pt-4 pb-2">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="flex-shrink mx-4 text-xs text-gray-400 dark:text-gray-500 uppercase">O</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        <div className="flex w-full gap-4 px-4 py-4">
          <button className="flex h-12 flex-1 items-center justify-center gap-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all">
            <img
              alt="Google logo"
              className="h-6 w-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIBr6UW_BAncjuLduzKmZBDwe7scBJvYfndXMMMVKSPhSB6sw4Qhkmh4vDXc-BtZimn5sRol5cwxJCWQ-8Kf9Mb0kkkMzS-Vwz7LdCTgfeMbeXOiyZzL0PIJAoMSZrTEbu-k-3vdSeDAE3XXw-q4Vi9U3XoYQS-uTFjJh4VhZl2Bvl6v1o7B-gbt8ycydDcBYgkA8gQQsLzne0pFQ70hSD0KeumpgwsCuU4CeCLXJkfb0C7DPIM7i9pCqQNxZFPZKqTPuihZcbE6hx"
            />
            <span className="text-sm font-semibold">Google</span>
          </button>
          <button className="flex h-12 flex-1 items-center justify-center gap-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all">
            <span className="material-symbols-outlined text-2xl">apple</span>
            <span className="text-sm font-semibold">Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
