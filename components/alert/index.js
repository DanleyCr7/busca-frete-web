import { useState, useContext} from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import SnackContext from '../../context/snackContext';
import MessageContext from '../../context/messageContext';
import SuccessContext from '../../context/successContext';
import { Alert } from '@mui/material';


export default function PositionedSnackbar() {
  const snackContext = useContext(SnackContext);
  const messageContext = useContext(MessageContext);
  const successContext = useContext(SuccessContext);
  const [state] = useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;

  const handleClose = () => {
    snackContext.setOpen(false);
  };

  return (
      <Snackbar anchorOrigin={{vertical, horizontal}} open={snackContext.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={successContext.success ? "success" : "error"} sx={{ width: '100%' }}>
          {messageContext.message}
        </Alert>
      </Snackbar>
  );
}