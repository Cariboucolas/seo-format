import { useState } from 'react';
import Box from '@mui/material/Box';
import EditorPanel from '../components/organisms/EditorPanel';
import PreviewPanel from '../components/organisms/PreviewPanel';

const initialData = {
    title: 'Rapport Annuel',
    content: 'Ceci est le début du document. Vous pouvez modifier ce texte dans le panneau de gauche pour voir la mise à jour en direct dans la prévisualisation au format A4.',
};

const FormatterPage = () => {
    const [data, setData] = useState(initialData);

    const handleDataChange = (field: keyof typeof initialData, value: string) => {
        setData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '400px 1fr',
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
            }}
        >
            <EditorPanel data={data} onChange={handleDataChange} />
            <PreviewPanel data={data} />
        </Box>
    );
};

export default FormatterPage;
