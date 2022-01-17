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
      <meta name="author" content="Pavlo Dubynka"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/touch-icon-iphone.png"></link> 
    </NextHead>
)

export default Head;
