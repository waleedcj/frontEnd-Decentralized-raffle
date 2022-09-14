//imports work with out front end
// "require" works with node js like the backend stuff
// nodes != javascript
//backend js a lil diff then front end js

//styles is basically css

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ManualHeader from "../componenets/ManualHeader";

// this function name can also be written like "const Home = () => {}"
//and export default in the bottom
//react is component based this this function u see here called home is a component
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Decentralized raffle</title>
                <meta
                    name="description"
                    content="fair and secure ethereum based raffle powered by chainlink "
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader />
            {/* header / connect button / nav bar*/}
            lol
        </div>
    );
}
