import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#f5f5f5',
            secondary: '#a0a0a0',
        },
    },

    shape: {
        borderRadius: 0,
    },


    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#f5f5f5',
                        color: '#121212',
                        border: '1px solid #f5f5f5',
                    },
                },
            },
        },
    },
});

export default theme;
