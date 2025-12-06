import { Patient, JournalEntry, Activity } from './types';

export const PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'Ana Martínez',
    email: 'ana.martinez@email.com',
    role: 'patient',
    activeSince: '15 Ene, 2024',
    totalSessions: 12,
    lastActivity: 'Nueva entrada de diario',
    status: 'active',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk2BSbP_MGDZltBxlJTVkFjKQ7kqLrVQ7tA5xDWyrXW_eLBnYn9KeWV8pZrK-7B1xMjHnN0XLGMmtoR3BPMBAsHGWTVgpVfATqQCyEZoW2Z43YYosLrxdZgy3W6VmQJOwpSHhsh1CMDQ2KS1lCokmujUXz2swV81nsMCqd7hJPJtJuVB9a81NpKTtd8C5OtRdKonWHsZOTL9x1IQBGQA1iQ7770eDCxhDAOGdybumQXF3gjZuvZnV-YqO4gfRTf4feqrq0HhPzaj5X'
  },
  {
    id: '2',
    name: 'Carlos Rodriguez',
    email: 'carlos.r@email.com',
    role: 'patient',
    activeSince: '20 Feb, 2024',
    totalSessions: 8,
    lastActivity: 'Última actividad: ayer',
    status: 'inactive',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmdOucW-VBQ--HCX7g_tfiB8TwK_VY7l0arTU-GZPCcppDY6Ts486lsDxtoWl0d5M813ooRe9AVhFvJnB2lrxEVgj38L8UUeYloITcy6LfZ38yXAmbUVcJJBIIQ85EPcCA_I6ZkRAGwWewDpxeJWQ_Dc_AkPYo0IDxDjcOdm_SB1-ayE94CiEQwaLkZe0QpBSYJwKFSmz18qxwE-3jbj0vsgwKl_blp6InTU-IJutkOIlwgbPzSYJT8nWrflgeBl_GUgXb8TH2yvQz'
  },
  {
    id: '3',
    name: 'Elena Gómez',
    email: 'elena.g@email.com',
    role: 'patient',
    activeSince: '05 Mar, 2024',
    totalSessions: 4,
    lastActivity: 'Última actividad: hace 3 días',
    status: 'inactive',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm8PpTPJ2bseyw39208H0Fqal0b92aK5m3-wr1y7SBkpYEWN-6A-Nz2F-L2p2L1sLs4YVQ-YUvmbFGpl_-q9-JsJ1VL8nNckAzRzVXZWt8wT_TKD8b503utxRcaEuBNtc9waoYQFvwRva64xv24rtqQkiQd39mIr7lXB1hi1R1S3n0LbKHA8LUfPvqquLYMhm2W9zf8IlxGWeAmPMVfthG6UyqrUS745hVz1-FiTPmSpf8b_xmnH16wBMl4ImPEu6QHGVKL_HIXnGm'
  },
  {
    id: '4',
    name: 'Javier Sánchez',
    email: 'javier.s@email.com',
    role: 'patient',
    activeSince: '10 Abr, 2024',
    totalSessions: 2,
    lastActivity: 'Última actividad: hace una semana',
    status: 'inactive',
    avatarUrl: '' // Empty to trigger initials fallback
  }
];

export const MOCK_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: '1',
    date: '24 de Julio, 2024',
    mood: 'anxious',
    content: 'Hoy fue un día particularmente difícil en la oficina. Sentí mucha presión por la nueva entrega y...',
    tags: ['Ansiedad', 'Trabajo']
  },
  {
    id: '2',
    date: '22 de Julio, 2024',
    mood: 'calm',
    content: 'Pude tomarme un tiempo para mí después de mucho tiempo. Medité por la mañana y me ayudó a...',
    tags: ['Reflexión', 'Calma']
  },
  {
    id: '3',
    date: '20 de Julio, 2024',
    mood: 'sad',
    content: 'Una conversación con mi madre me dejó pensando mucho. A veces siento que no nos entendemos...',
    tags: ['Tristeza', 'Familia']
  },
  {
    id: '4',
    date: '18 de Julio, 2024',
    mood: 'happy',
    content: 'Hoy quiero agradecer por las pequeñas cosas. El café de la mañana, una llamada con un amigo...',
    tags: ['Gratitud']
  }
];

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Ejercicio de respiración profunda',
    description: 'Dedica 5 minutos a una respiración consciente para calmar la mente.',
    status: 'pending',
    assignedDate: 'Hoy',
    type: 'breathing'
  },
  {
    id: '2',
    title: 'Escribe tres cosas que agradeces hoy',
    description: 'Reflexiona sobre los aspectos positivos de tu día y anótalos.',
    status: 'pending',
    assignedDate: 'Hoy',
    type: 'journaling'
  },
  {
    id: '3',
    title: 'Paseo de 15 minutos al aire libre',
    description: 'Conecta con la naturaleza y despeja tu mente con una caminata corta.',
    status: 'completed',
    assignedDate: 'Ayer',
    type: 'exercise'
  }
];
