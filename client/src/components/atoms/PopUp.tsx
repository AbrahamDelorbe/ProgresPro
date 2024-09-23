import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

type PopupPros = {
    message: string;
    severity: "success" | "info" | "warning" | "error"
}

export default function PopUp({ message, severity }: PopupPros) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity={severity}>
      {message}
    </Alert>
  );
}