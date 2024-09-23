import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export type FullWidthInputPros = {
  id?: string;
  inputName?: string;
  width: string;
  maxWidth?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  value: string;
  error: string;
  
}

export default function FullWidthInputField({ inputName, width, maxWidth, id, label, onChange, error, value,  ...props }: FullWidthInputPros) {
  return (
    <Box sx={{ width: width, maxWidth: maxWidth }}>
      <TextField fullWidth label={label} error={!error} helperText={error} name={inputName} value={value} onChange={onChange}  id={id} {...props}/>
      
    </Box>
  );
}