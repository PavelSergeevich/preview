import React from "react";
import NextHead from "next/head";
import Script from 'next/script'

const Head = ({ title, description }) => (  
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title || ""}</title>
      <meta name="description" content={description || ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google-site-verification" content="3oun9ZZztq5VpDD1Lp73V5qsF3JZh1ah47vVOq3j9FM" />      
    <Script
      id="site-tag-aw"
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=AW-1002121066"
    />
    <Script
      id="site-tag"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'AW-1002121066');`,
      }}
    />
    <Script
      id="event-snippet"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `gtag('event', 'conversion', {'send_to': 'AW-1002121066/XCOaCOfutGAQ6s7s3QM'});`,
      }}
    />
    <Script
      id="site-tag-analytics"
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-L3M7YL6FVR"
    />
    <Script
      id="site-tag-gtag"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L3M7YL6FVR');`,
      }}
    />
    <Script
      id="facebook-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1049503675834921');
        fbq('track', 'PageView');`,
      }}
    />  
    <Script
      id="tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-52Z565Q');`,
      }}
    />    
    <link rel="apple-touch-icon" sizes="180x180" href="/touch-icon-iphone.png"></link>
    </NextHead>
)

export default Head;
