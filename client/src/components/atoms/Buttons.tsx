import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

// Extend MUI ButtonProps to include custom props if needed
interface ButtonProps extends Omit<MUIButtonProps, 'variant'> {
  text: string;
  color?: MUIButtonProps['color'];
  variant?: MUIButtonProps['variant'];
}

type ButtonGroupProps = {
  children: React.ReactNode;
}

// Fix varient typings
export default function ButtonComponent({ text, onClick, color, varient }: ButtonProps) {
  return <Button onClick={onClick} color={color} variant={varient} >{text}</Button>;
}


export function ButtonGroupComponent({ children }: ButtonGroupProps) {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      {children}
    </ButtonGroup>
  );
}