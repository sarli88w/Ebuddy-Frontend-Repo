import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  User,
  UserState,
  ThemeState,
} from "./types";

const initThemeState: ThemeState = {
  darkMode: false,
  loading: false,
  error: null,
};

const initUserState: UserState = {
  isAuthenticated: false,
  data: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initThemeState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: initUserState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.data = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.data = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    clearUser: (state) => {
      state.data = null;
    },
  },
});

export const { toggleTheme, setTheme, setLoading, setError } = themeSlice.actions;
export const { login, logout, setUser, clearUser } = userSlice.actions;

export default {
  theme: themeSlice.reducer,
  user: userSlice.reducer,
};
