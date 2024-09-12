import * as React from 'react';
import { Typography } from '@mui/material';

type TextProps = {
    tag: string;
    text: string;
}



export default function Text({ tag, text }: TextProps) {
    return (
        <Typography variant={tag} component="h2">
            {text}
        </Typography>
    )

}