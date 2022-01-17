import React from "react";
import SbEditable from "storyblok-react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import Offcanvas from "react-bootstrap/Offcanvas";
import ContactForm from "./ContactForm";
import Alert from "react-bootstrap/Alert";

const Hero = ({ blok }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [showAlert, setShowAlert] = useState(true);

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
            <div className="bd-desc">
              <ul className="list-unstyled">
                <li id="intro">
                  <p className="lead">
                    <b>{blok.title}</b>
                    {blok.desc}
                  </p>
                </li>
                <li id="button">
                  {blok.title === "Dikardi" ? (
                    <button
                      className="btn-active"
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      {blok.btn_link}
                    </button>
                  ) : (
                    <a className="btn-blind" href={blok.link.cached_url}>
                      {blok.btn_link}
                    </a>
                  )}
                </li>
                <li id="button-pay">
                  {!showAlert ? (
                    <button
                      className="btn-blind"
                      onClick={() => {
                        setShowAlert(true);
                      }}
                    >
                      {blok.btn_alert}
                    </button>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </div>
            {(blok.alert !== "") & showAlert ? (
              <Alert
                variant="info"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                <p>{blok.alert}</p>
              </Alert>
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Offcanvas show={show} onHide={() => setShow(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {process.env.CONTACT_FORM_HEADER[router.locale]}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <ContactForm locale={router.locale}></ContactForm>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </SbEditable>
  );
};

export default Hero;
