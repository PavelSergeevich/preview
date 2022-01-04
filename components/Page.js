import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";
import Script from "next/script";

const Page = ({ blok }) => (
  <SbEditable content={blok}>
    <noscript dangerouslySetInnerHTML={{
        __html: `<iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-52Z565Q"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>`,
      }}>
    </noscript>

    <noscript dangerouslySetInnerHTML={{
        __html: `<img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=1049503675834921&ev=PageView&noscript=1"
      />`,
      }}>
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
