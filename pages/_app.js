import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ShareIcons from "../components/ShareIcons";
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

            <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />

            <link rel='manifest' href='/manifest.json' />
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
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1620.png' sizes='1620x2160' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />

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
        <h1 className="bg-blue-500 text-white text-center text-xl">🏏 GooglePay Gully Cricket Game Offer : Collect Cards & Earn Assured ₹51 to ₹201</h1>
        <Component {...pageProps} />
        <div className="bg-blue-400">
            <ShareIcons />
        </div>
        <footer className="flex p-3 gap-2">
            <Link href={'/terms'}>Terms</Link>
            <Link href={'/privacy'}>Privacy</Link>
            <a href='https://github.com/KManiKumarReddy/google-pay-gully-cricket-cards-sharing-app/blob/master/LICENSE'>License{' '}
                <Image
                    src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-2.png"
                    width={80} height={15} alt="WTFPL" />
            </a>
            <a href="https://www.kmanikumarreddy.com">Developed by Mani</a>
        </footer>
    </>
}