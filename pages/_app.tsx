import 'styles/main.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import axios from 'axios';
import Header from 'components/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Cars</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <div className="flex flex-col h-screen justify-between">
                <Header />

                <SWRConfig value={{ fetcher: (url: string) => axios(url).then((res) => res.data) }}>
                    <div className="mb-auto">
                        <Component {...pageProps} />
                    </div>
                </SWRConfig>
            </div>
        </>
    );
}

export default MyApp;
