import Head from 'next/head'

const App = ({ Component, pageProps }) => (
    <>
        <style jsx global>
            {`
                html {
                    font-size: 16px;
                    font-family: 'Roboto Slab', serif;
                    text-align: center;
                }
                @media all and (min-width: 600px) {
                    html {
                        font-size: 32px;
                    }
                }
                body {
                    background-color: #0592D0;
                }
            `}
        </style>

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>IROV</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content="Ingress Resistance Oslo & Viken"
            />
            <meta
                property="og:image"
                content="/resistance_key.svg"
            />
            <meta name="og:title" content="IROV" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet"></link>
        </Head>

        <Component { ...pageProps } />
    </>
)

export default App;