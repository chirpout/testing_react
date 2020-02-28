import Header from './Header';
import Head from 'next/head'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
}

const DefaultLayout = props => (
    <div style={layoutStyle}>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
        </Head>
        <Header />
        {props.children}
    </div>
);

export default DefaultLayout;