import * as React from 'react';
import { Typography } from '@mui/material';

type TextProps = {
    tag: string;
    text: string;
    component?: string;
}



export default function Text({ tag, text, component }: TextProps) {
    return (
        <Typography variant={tag} component={component}>
            {text}
        </Typography>
    )

}