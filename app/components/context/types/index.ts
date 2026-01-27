export type ContextType = 'light' | 'dark' | '';

export interface ThemeContextProps {
  theme: ContextType;
  toggleTheme: () => void;
}
