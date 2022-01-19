import React from "react";
import { Container, Row, Col } from "reactstrap";
import SbEditable from "storyblok-react";
import Script from "next/script";

const Docs = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bd-desc">
        <b className="h5 mt-3">{blok.title}</b>
      </div>
      <div id="adobe-dc-view" className="pdf-embed"></div>
      <Script
        id="adobe-1"
        strategy="beforeInteractive"
        src="https://documentcloud.adobe.com/view-sdk/main.js"
      />
      <Script id="show-banner" strategy="lazyOnload">
        {`document.addEventListener("adobe_dc_view_sdk.ready", function () {
        var adobeDCView = new AdobeDC.View({
          clientId: '6da6555e4bee4602a68a7e81c5b98f1d',
          divId: "adobe-dc-view",
        });
        adobeDCView.previewFile(
          {
            content: { location: { url: blok.document.filename } },
            metaData: { fileName: "dogovir_public.pdf" },
          },
          {
            embedMode: "SIZED_CONTAINER",
          });
        });`}
      </Script>
      <div className="mb-4">
        <iframe
          id="pdf"
          src={`https://docs.google.com/viewer?url=${blok.document.filename}&embedded=true`}
          frameBorder="0"
        ></iframe>

        <div className="btn-case">
          <a
            className="btn-blind"
            href={blok.document.filename}
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            {blok.doc_link}
          </a>
        </div>
      </div>
    </SbEditable>
  );
};

export default Docs;
