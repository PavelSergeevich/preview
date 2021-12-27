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
      id="tag-manager"
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
