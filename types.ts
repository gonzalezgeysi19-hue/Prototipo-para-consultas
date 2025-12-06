export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'psychologist';
  avatarUrl?: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  mood: 'happy' | 'sad' | 'anxious' | 'calm' | 'frustrated';
  content: string;
  tags: string[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  dueDate?: string;
  assignedDate: string;
  type: 'breathing' | 'journaling' | 'exercise' | 'reading';
}

export interface Patient extends User {
  activeSince: string;
  totalSessions: number;
  lastActivity: string; // e.g., "ayer", "hace 3 días"
  status: 'active' | 'inactive'; // represented by the green dot
}
