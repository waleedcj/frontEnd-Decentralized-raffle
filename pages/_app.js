import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
//all of our pages gets wraped in component which will contain the js and the html in them
// and then stuck and returned here as the front end this _app is like the entry point

// this function name can also be written like "const Home = () => {}"
//and export default in the bottom
function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            {/*initializeOnMount does not let you hook to a server to add more deatures to the website I might need this soon */}
            <Component {...pageProps} />
        </MoralisProvider>
    ); //we are currently swaping our index.js for component
}

export default MyApp;
