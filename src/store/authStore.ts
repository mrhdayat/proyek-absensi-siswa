import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

// Mock users for demo
const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    name: 'Administrator',
    email: 'admin@smks.sch.id',
    role: 'admin',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    username: 'guru1',
    name: 'Ahmad Susanto, S.Pd',
    email: 'ahmad@smks.sch.id',
    role: 'teacher',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    username: 'wali1',
    name: 'Siti Nurhaliza, S.Pd',
    email: 'siti@smks.sch.id',
    role: 'homeroom',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    username: 'kepsek',
    name: 'Dr. H. Muhammad Yusuf, M.Pd',
    email: 'kepsek@smks.sch.id',
    role: 'principal',
    createdAt: new Date().toISOString(),
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials) => {
        set({ isLoading: true });
        
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const user = mockUsers.find(
          (u) => u.username === credentials.username && credentials.password === 'password123'
        );
        
        if (user) {
          set({ user, isAuthenticated: true, isLoading: false });
        } else {
          set({ isLoading: false });
          throw new Error('Invalid credentials');
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      setUser: (user) => {
        set({ user, isAuthenticated: true });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);