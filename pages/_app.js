import './css/global-styles.css';

// This file's current sole purpose is to import the global style sheet.
// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
