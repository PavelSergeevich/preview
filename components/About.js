import React from "react";
import { Container, Row, Col } from "reactstrap";
import SbEditable from "storyblok-react";

const About = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <Container>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <img
                  className="img-fluid mx-auto d-block"
                  src={blok.image.filename}
                  alt={blok.image.alt}
                />
              </Col>
              <Col sm={12} md={6} lg={6}>
                
                  <ul className="list-unstyled">
                    <li>
                      <b className="h5 mt-3">{blok.title}</b>
                    </li>
                    <li>
                      <small id="intro">
                        <hr />
                        {blok.description}
                      </small>
                    </li>                               
                  </ul>                                       
                
              </Col>
            </Row>
      </Container>
    </SbEditable>
  );
};

export default About;
