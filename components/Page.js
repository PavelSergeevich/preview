import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";
import Script from "next/script";

const Page = ({ blok }) => (
  <SbEditable content={blok}>
    <Script
      async
      id="global-new"
      src="https://www.googletagmanager.com/gtag/js?id=G-EV1NGRY6WT"
    />
    <Script
      async
      id="global"
      src="https://www.googletagmanager.com/gtag/js?id=AW-1002121066"
    />
    <Script
      id="global-tag"
      dangerouslySetInnerHTML={{
        __html: `${blok.script_global}`,
      }}
    />
    <Script
      id="fb-pixel"
      dangerouslySetInnerHTML={{
        __html: `${blok.script_fb}`,
      }}
    />
    <Script
      id="global-in"
      dangerouslySetInnerHTML={{
        __html: `${blok.script_fb_ns}`,
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style={{display:'none'}}
        src="https://www.facebook.com/tr?id=1049503675834921&ev=PageView&noscript=1"
      />
    </noscript>
    <Script
      id="event-tag"
      dangerouslySetInnerHTML={{
        __html: `${blok.script_event}`,
      }}
    />
    <main>
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  </SbEditable>
);

export default Page;
