import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next Capacitor boilerplate</title>
                <meta name="description" content="boilerplate code" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hi there, <a href="#">kind developer</a>
                </h1>
            </main>
        </div>
    );
}
