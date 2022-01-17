import React from "react";
import { Container, Row, Col } from "reactstrap";
import SbEditable from "storyblok-react";

const Docs = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <Container>
        <Row>
          <div className="bd-desc">
            <b className="h5">{blok.title}</b>
          </div>
          <div className="mb-4">
            <embed
              src={blok.document.filename}
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>
        </Row>
      </Container>
    </SbEditable>
  );
};

export default Docs;
