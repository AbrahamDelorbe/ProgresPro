import { Box } from "@mui/material";

interface ImageComponentProps {
    url: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
}

export function ImageComponent({ url, width, alt, height }: ImageComponentProps) {
    return (
        <Box>
            <img src={url}
                alt={alt}
                width={width}
                height={height} />
        </Box>
    )
}