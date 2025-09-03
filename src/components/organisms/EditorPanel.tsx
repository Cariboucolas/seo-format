import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

interface EditorData {
    title: string;
    content: string;
}

interface EditorPanelProps {
    data: EditorData;
    onChange: (field: keyof EditorData, value: string) => void;
}

const EditorPanel = ({ data, onChange }: EditorPanelProps) => {
    return (
        <Box sx={{ backgroundColor: 'background.paper', padding: 4, borderRight: '1px solid rgba(255, 255, 255, 0.1)', overflowY: 'auto' }}>
            <Typography variant="h6" sx={{ paddingBottom: 2, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                Éditeur
            </Typography>
            <Stack spacing={3} sx={{ marginTop: 3 }}>
                <TextField
                    label="Titre du document"
                    variant="outlined"
                    fullWidth
                    value={data.title}
                    onChange={(e) => onChange('title', e.target.value)}
                />
                <TextField
                    label="Contenu"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={10}
                    value={data.content}
                    onChange={(e) => onChange('content', e.target.value)}
                />
            </Stack>
        </Box>
    );
};

export default EditorPanel;
