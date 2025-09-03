import Box from '@mui/material/Box';

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <Box
            component="main"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: 2,
            }}
        >
            {children}
        </Box>
    );
};

export default PageLayout;
