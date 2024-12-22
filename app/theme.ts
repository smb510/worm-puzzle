'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    palette:
    {
        mode: 'light',
        primary: {
            main: '#d50000',
        },
        secondary: {
            main: '#00e676',
        },
    },
});



export default theme;