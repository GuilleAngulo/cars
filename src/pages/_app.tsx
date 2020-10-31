import 'styles/main.css';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import axios from 'axios';
import SEO from 'components/SEO';
import Header from 'components/Header';
//import Footer from 'components/Footer';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', (url) => {
    //console.log('route change start at ' + url);
    NProgress.start();
});

Router.events.on('routeChangeComplete', (url) => {
    //console.log('route change complete at ' + url);
    NProgress.done();
});

Router.events.on('routeChangeError', (err, url) => {
    //console.log('route change error at ' + url + '. ' + err);
    NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SEO title={'Home'} />
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex-1">
                    <SWRConfig
                        value={{ fetcher: (url: string) => axios(url).then((res) => res.data) }}
                    >
                        <Component {...pageProps} />
                    </SWRConfig>
                </div>

                {/*<Footer />*/}
            </div>
        </>
    );
}

export default MyApp;
