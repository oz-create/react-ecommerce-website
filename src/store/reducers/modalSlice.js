// redux/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { setDrawerOpen, toggleDrawer } = modalSlice.actions;
export default modalSlice.reducer;
