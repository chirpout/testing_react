import DefaultLayout from '../components/DefaultLayout';
import { Button, Col, Container, Row, FormGroup, Label, CustomInput } from 'reactstrap';

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
            <iframe src="https://ischooluw.co1.qualtrics.com/jfe/form/SV_aa67eixcMktPOmh" height="800px" width="600px"></iframe>

        </Container>
    );
}