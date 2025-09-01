import PageLayout from '../components/templates/PageLayout';
import Card from '../components/molecules/Card';

const HomePage = () => {
    return (
        <PageLayout>
            <Card
                title="SEO Formatter"
                content="Tool to format and optimize your SEO audit into A4 page."
                buttonText="Go"
                buttonHref="/formatter"
            />
        </PageLayout>
    );
};

export default HomePage;
