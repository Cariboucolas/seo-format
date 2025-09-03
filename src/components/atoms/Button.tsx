import Button from '@mui/material/Button';

interface ButtonProps {
    children: React.ReactNode;
    href: string;
}

const AppButton = ({ children, href }: ButtonProps) => {
    return (
        <Button href={href} variant="outlined" color="inherit">
            {children}
        </Button>
    );
};

export default AppButton;
