import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Preloader from "@/components/Preloader";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="/assets/css/app.min.css" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <body>
                    <main>
                        <Preloader />
                        <Main />
                        <NextScript />
                    </main>

                    <script src="/assets/js/build.min.js"></script>
                </body>
            </Html>
        );
    }
}
