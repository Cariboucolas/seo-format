import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppButton from '../atoms/Button.tsx'; // Notre bouton refactorisé

interface CardProps {
    title: string;
    content: string;
    buttonText?: string;
    buttonHref?: string;
}

const Card = ({ title, content, buttonText, buttonHref }: CardProps) => {
    return (
        <Paper sx={{ padding: 4, maxWidth: '450px' }}>
            <Typography variant="h5" component="h2" sx={{ paddingBottom: 2 }}>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {content}
            </Typography>

            {buttonText && buttonHref && (
                <Box sx={{ marginTop: 3, textAlign: 'right' }}>
                    <AppButton href={buttonHref}>{buttonText}</AppButton>
                </Box>
            )}
        </Paper>
    );
};

export default Card;
