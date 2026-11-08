import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  hydrated: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },

    setTheme: (state, action) => {
      state.mode = action.payload;
    },

    initializeTheme: (state, action) => {
      state.mode = action.payload;
      state.hydrated = true;
    },
  },
});

export const { toggleTheme, setTheme, initializeTheme } =
  themeSlice.actions;

export default themeSlice.reducer;