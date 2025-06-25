 // redux/modalSlice.js
  import { createSlice } from '@reduxjs/toolkit';
  
  const initialState = {
    open: false,
  };
  
  const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
      setOpen: (state, action) => {
        state.open = action.payload;
      }
    },
  });
  
  export const { setOpen } = snackbarSlice.actions;
  export default snackbarSlice.reducer;
  