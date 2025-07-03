import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const getSystemTheme = (): boolean => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const applyTheme = (isDark: boolean) => {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      isDark: getSystemTheme(),

      setTheme: (theme) => {
        const isDark = theme === 'dark' || (theme === 'system' && getSystemTheme());
        applyTheme(isDark);
        set({ theme, isDark });
      },

      toggleTheme: () => {
        const { theme } = get();
        const newTheme = theme === 'light' ? 'dark' : 'light';
        get().setTheme(newTheme);
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          const isDark = state.theme === 'dark' || 
            (state.theme === 'system' && getSystemTheme());
          applyTheme(isDark);
          state.isDark = isDark;
        }
      },
    }
  )
);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const { theme, setTheme } = useThemeStore.getState();
  if (theme === 'system') {
    setTheme('system');
  }
});