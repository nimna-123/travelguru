import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {  lightMode: false };

const toggleSlice = createSlice({
  name: 'modeset',
  initialState,
  reducers: {
   
    toggleMode(state) {
      state.lightMode = !state.lightMode;
    }
  }
});

const store = configureStore({
  reducer: toggleSlice.reducer
});

export const toggleActions = toggleSlice.actions;

export default store;