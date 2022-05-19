import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <meta name='application-name' content='Google Pay Gully Cricket Cards Sharing App' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Google Pay Gully Cricket Cards Sharing App' />
            <meta name='description' content='Best Google Pay Gully Cricket Cards Sharing App in the world' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-config' content='/icons/browserconfig.xml' />
            <meta name='msapplication-TileColor' content='#2B5797' />
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#000000' />

            <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
            <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

            <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
            <link rel='manifest' href='/manifest.json' />
            <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
            <link rel='shortcut icon' href='/favicon.ico' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://google-pay-gully-cricket-cards-sharing-app.kmanikumarreddy.com' />
            <meta name='twitter:title' content='Google Pay Gully Cricket Cards Sharing App' />
            <meta name='twitter:description' content='Best Google Pay Gully Cricket Cards Sharing App in the world' />
            <meta name='twitter:image' content='https://google-pay-gully-cricket-cards-sharing-app.kmanikumarreddy.com/icons/android-chrome-192x192.png' />
            <meta name='twitter:creator' content='@KManiKumarReddy' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='Google Pay Gully Cricket Cards Sharing App' />
            <meta property='og:description' content='Best Google Pay Gully Cricket Cards Sharing App in the world' />
            <meta property='og:site_name' content='Google Pay Gully Cricket Cards Sharing App' />
            <meta property='og:url' content='https://google-pay-gully-cricket-cards-sharing-app.kmanikumarreddy.com' />
            <meta property='og:image' content='https://google-pay-gully-cricket-cards-sharing-app.kmanikumarreddy.com/icons/apple-touch-icon.png' />

            <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
        </Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TK2PY77NH7" strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-TK2PY77NH7');
`}
        </Script>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5635149151051950"
            crossorigin="anonymous" strategy="afterInteractive"></Script>
        <div className="container mx-auto min-h-screen">
            <Component {...pageProps} />
        </div>
        <footer className="flex p-3 gap-2">
            <Link href={'/terms'}>Terms</Link>
            <Link href={'/privacy'}>Privacy</Link>
        </footer>
    </>
}