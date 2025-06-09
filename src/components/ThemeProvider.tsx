import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create context for theme state
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => { },
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

  // Create MUI theme with enhanced dark mode colors
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#7dd3fc' : '#3b82f6',  // Lighter blue in dark mode
        light: isDarkMode ? '#bae6fd' : '#60a5fa',
        dark: isDarkMode ? '#38bdf8' : '#2563eb',
      },
      secondary: {
        main: isDarkMode ? '#c4b5fd' : '#6366f1',  // Lighter purple in dark mode
        light: isDarkMode ? '#ddd6fe' : '#818cf8',
        dark: isDarkMode ? '#a78bfa' : '#4f46e5',
      },
      background: {
        default: isDarkMode ? '#0f172a' : '#f8f9fa',  // Deeper blue-black for dark mode
        paper: isDarkMode ? '#1e293b' : '#ffffff',    // Slate-800 for better contrast
      },
      text: {
        primary: isDarkMode ? '#f1f5f9' : '#212529',  // Brighter white text in dark mode
        secondary: isDarkMode ? '#cbd5e1' : '#495057', // Lighter secondary text for better readability
      },
      error: {
        main: isDarkMode ? '#fb7185' : '#ef4444',  // Enhanced error colors
      },
      warning: {
        main: isDarkMode ? '#fbbf24' : '#f59e0b',  // Enhanced warning colors
      },
      info: {
        main: isDarkMode ? '#38bdf8' : '#3b82f6',  // Enhanced info colors
      },
      success: {
        main: isDarkMode ? '#4ade80' : '#22c55e',  // Enhanced success colors
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
              background: isDarkMode ? '#334155' : '#f1f1f1',  // Darker scrollbar track
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: isDarkMode ? '#7dd3fc' : '#888',  // Match primary color
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: isDarkMode ? '#bae6fd' : '#555',  // Lighter on hover
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',  // Remove paper background image
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',  // No uppercase text in buttons
            borderRadius: '8px',    // Rounded buttons
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',  // More rounded cards
            boxShadow: isDarkMode
              ? '0 4px 20px rgba(0, 0, 0, 0.25)'
              : '0 4px 20px rgba(0, 0, 0, 0.05)',
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