import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';


interface ButtonProps extends Omit<MUIButtonProps, 'variant'> {
  text: string;
  color?: MUIButtonProps['color'];
  variant?: "contained" | "text" | "outlined";
}

type ButtonGroupProps = {
  children: React.ReactNode;
}

// Fix varient typings
export default function ButtonComponent({ text, onClick, color, variant }: ButtonProps) {
  return <Button onClick={onClick} color={color} variant={variant} >{text}</Button>;
}


export function ButtonGroupComponent({ children }: ButtonGroupProps) {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      {children}
    </ButtonGroup>
  );
}