export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  data: User | null;
  isAuthenticated: boolean,
}

export interface ThemeState {
  darkMode: boolean;
  loading: boolean;
  error: string | null;
}