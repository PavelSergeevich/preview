import React from "react";
import { Container, Row, Col } from "reactstrap";
import SbEditable from "storyblok-react";

const Docs = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      
          <div className="bd-desc">
            <b className="h5 mt-3">{blok.title}</b>
          </div>
          <div className="mb-4">
           
              <iframe id="pdf" src={`https://docs.google.com/viewer?url=${blok.document.filename}&embedded=true`} frameBorder="0"></iframe>
            
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
