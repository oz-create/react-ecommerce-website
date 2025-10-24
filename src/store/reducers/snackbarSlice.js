 // redux/modalSlice.js
  import { createSlice } from '@reduxjs/toolkit';
  
  const initialState = {
    open: false,
    message: ""
  };
  
  const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
      setOpen: (state, action) => {
        state.open = action.payload;
      },
      updateMessage: (state,action) => {
        state.message = action.payload;
      }
    },
  });
  
  export const { setOpen, updateMessage } = snackbarSlice.actions;
  export default snackbarSlice.reducer;
  