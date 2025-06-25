import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../store/reducers/snackbarSlice';

function SnackbarComp() {

  const dispatch = useDispatch()
  const { open } = useSelector((state) => state.snackbar)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setOpen(false));
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
         <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message="Product added to cart"
                        action={action}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
    </div>
  )
}

export default SnackbarComp