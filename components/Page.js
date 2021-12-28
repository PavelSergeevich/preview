import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";
import Script from "next/script";

const Page = ({ blok }) => (
  <SbEditable content={blok}>
    <Script
      async
      id="global"
      src="https://www.googletagmanager.com/gtag/js?id=G-L3M7YL6FVR"
    />
    <noscript>
      <iframe
        title="tag-manager"
        src="https://www.googletagmanager.com/ns.html?id=GTM-52Z565Q"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
    <Script
      id="fb-pixel"
      dangerouslySetInnerHTML={{
        __html: `${blok.script_fb}`,
      }}
    />
    <Script
      id="global-new"
      dangerouslySetInnerHTML={{
        __html: `${blok.script_fb_ns}`,
      }}
    />
     <Script
      id="event-tag"
      dangerouslySetInnerHTML={{
        __html: `${blok.script_event}`,
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1049503675834921&ev=PageView&noscript=1"
        alt="fb-pixel"
      />
    </noscript>   
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
