import DefaultLayout from '../components/DefaultLayout';
import { Button, Col, Container, Jumbotron, Row } from 'reactstrap';

export default function Index() {
    return (
        <DefaultLayout>
            <Container className="main-text">
                <h1 className="display-3">Your concern, amplified</h1>
                <p className="lead">Contribute to our platform dedicated to increasing transparency in the workplace.</p>
                <p className="lead">
                    <Button href="/register">GET STARTED</Button>
                </p>
            </Container>
            <hr />
            <Container>
                <Row>
                    <Col>
                        <h3>REPORT SECURELY</h3>
                        <p>See something, say something. You're completely anonymous. Simple, fast reporting.</p>
                    </Col>
                    <Col>
                        <h3>BE HEARD</h3>
                        <p>Your report gets aggregated so we can do statistics stuff. We publish our analyses so your workplace is transparent, blah.</p>
                    </Col>
                    <Col>
                        <h3>ANALYSE TRENDS</h3>
                        <p>Track companies over time. See current issues in your industry and region. Browse data.</p>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
            .main-text {
                text-align: center;
            }
        `}</style>         
        </DefaultLayout>
    );
}