import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


type FullWidthInputPros = {
  id?: string;
  width: string;
  maxWidth?: string;
  label?: string;
}

export default function FullWidthInputField({ width, maxWidth, id, label }: FullWidthInputPros) {
  return (
    <Box sx={{ width: width, maxWidth: maxWidth }}>
      <TextField fullWidth label={label} id={id} />
    </Box>
  );
}