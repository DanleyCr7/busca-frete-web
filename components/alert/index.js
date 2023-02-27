import { useState, useContext} from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Context from '../../pages/Context';


export default function PositionedSnackbar() {
  const [open, setOpen] = useContext(Context);
  const [state] = useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{vertical, horizontal}}
        open={open}
        onClose={handleClose}
        message="Salvo com sucesso"
        key={vertical + horizontal}
      />
    </div>
  );
}