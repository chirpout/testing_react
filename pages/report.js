import DefaultLayout from '../components/DefaultLayout';
import { Button, Col, Container, Row } from 'reactstrap';
import styles from './css/report.module.css';

export default function Report() {
    return (
        <DefaultLayout>
            <ReportIntroduction>
            </ReportIntroduction>
            <iframe className={styles.qualtrics} src="https://ischooluw.co1.qualtrics.com/jfe/form/SV_aa67eixcMktPOmh"></iframe>
        </DefaultLayout>
    );
}

const ReportIntroduction = () => {
    return (
        <div>
            <h1>Report a workplace concern</h1>
            <p>How it works:...</p>
        </div>
    );  
}
