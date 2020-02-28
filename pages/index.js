import DefaultLayout from '../components/DefaultLayout';
import { Button, Col, Container, Jumbotron, Row } from 'reactstrap';
import styles from './index.module.css';

export default function Index() {
    return (
        <DefaultLayout>
            <Container className={styles.container}>
                <h1 className="display-3">Your concern, amplified</h1>
                <p className="lead">Contribute to our platform dedicated to increasing transparency in the workplace.</p>
                <span className="buttongroup">
                    <Button outline className={styles.mainbutton} href="/browse">FIND A WORKPLACE</Button>{' '}{' '}
                    <Button outline className={styles.mainbutton} href="/report">REPORT A CONCERN</Button>
                </span>
            </Container>
            <hr />
            <Container className={styles.container}>
                <Row>
                    <Col>
                        <h3>REPORT SECURELY</h3>
                        <p>See something, say something. You're completely anonymous. Simple, fast reporting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col>
                        <h3>BE HEARD</h3>
                        <p>Your report gets aggregated so we can do statistics stuff. We publish our analyses so your workplace is transparent, blah. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col>
                        <h3>ANALYSE TRENDS</h3>
                        <p>Track companies over time. See current issues in your industry and region. Browse data. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                </Row>
            </Container>        
        </DefaultLayout>
    );
}