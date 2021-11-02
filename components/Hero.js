import React from "react";
import SbEditable from "storyblok-react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import Offcanvas from "react-bootstrap/Offcanvas";
import ContactForm from "./ContactForm";

const Hero = ({ blok }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <SbEditable content={blok}>
      <Container key={blok._uid}>
        <Row>
          <Col xs={12} md={6}>
            <img
              src={blok.image.filename}
              alt={blok.image.alt}
              className="img-fluid mx-auto d-block"
            />
          </Col>
          <Col xs={12} md={6} className="bd-desc">
            <ul className="list-unstyled">
              <li id="intro">
                <div className="bd-desc">
                  <p className="lead">
                    <b>{blok.title}</b>
                    {blok.desc}
                  </p>
                </div>
              </li>
              <li>
                <div className="btn-case">
                  {blok.title === "Dikardi" ? (
                    <button
                      className="btn-active"
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      {blok.btn_link}
                    </button>
                  ) : (<a href={blok.link.cached_url}>
                    <button className="btn-blind">                     
                        {blok.btn_link}                     
                    </button>
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Offcanvas show={show} onHide={() => setShow(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{process.env.CONTACT_FORM_HEADER[router.locale]}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
            <ContactForm locale={router.locale}>
              
                </ContactForm>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </SbEditable>
  );
};

export default Hero;
