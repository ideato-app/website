import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create context for theme state
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Hook to use theme context
export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

// Create theme provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference on initial load
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  // Create MUI theme
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#60a5fa' : '#3b82f6',
        light: isDarkMode ? '#93c5fd' : '#60a5fa',
        dark: isDarkMode ? '#3b82f6' : '#2563eb',
      },
      secondary: {
        main: isDarkMode ? '#818cf8' : '#6366f1',
        light: isDarkMode ? '#a5b4fc' : '#818cf8',
        dark: isDarkMode ? '#6366f1' : '#4f46e5',
      },
      background: {
        default: isDarkMode ? '#0D1117' : '#f8f9fa',
        paper: isDarkMode ? '#161B22' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#e6edf3' : '#212529',
        secondary: isDarkMode ? '#a1aab8' : '#495057',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
              width: '0.4em',
            },
            '&::-webkit-scrollbar-track': {
              background: isDarkMode ? '#21262d' : '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: isDarkMode ? '#58a6ff' : '#888',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: isDarkMode ? '#a5b4fc' : '#555',
            },
          },
        },
      },
    },
    typography: {
      fontFamily: "'Cairo', 'Tajawal', sans-serif",
      h1: {
        fontWeight: 800,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    direction: 'rtl',
  });

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 