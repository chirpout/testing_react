import DefaultLayout from '../components/DefaultLayout';
import { Button, Col, Container, Row } from 'reactstrap';

export default function Report() {
    return (
        <DefaultLayout>
            <ReportIntroduction>
            </ReportIntroduction>
        </DefaultLayout>
    );
}

const ReportIntroduction = () => {
    return (
        <Container>
            <h1 className="display-3">Report a workplace concern</h1>
            <p className="lead">How it works:...</p>
        </Container>
    );  
}