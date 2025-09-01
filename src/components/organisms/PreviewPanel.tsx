import './PreviewPanel.css';

interface PreviewPanelProps {
    data: {
        title: string;
        content: string;
    };
}

const PreviewPanel = ({ data }: PreviewPanelProps) => {
    return (
        <div className="preview-panel">
            <div className="a4-page">
                <h1>{data.title}</h1>
                <p>{data.content}</p>
            </div>
            <div className="a4-page">
                <p>Suite du contenu sur une deuxième page...</p>
            </div>
        </div>
    );
};

export default PreviewPanel;
