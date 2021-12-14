import React from "react";
import { Container, Row, Col } from "reactstrap";
import SbEditable from "storyblok-react";
import { useRouter } from "next/router";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import ContactForm from "./ContactForm";

const DanceList = ({ blok }) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const router = useRouter();
  var danceForm = [];

  return (
    <SbEditable content={blok} key={blok._uid}>
      <Container>
        {blok.dances.map((dance, key) => {
          const lang = dance.lang === "default" ? "/ru" : `/${dance.lang}`;
          danceForm[key] = dance.content.title;
          return (
            <Row key={key}>
              <Col sm={12} md={6} lg={6}>
                <img
                  className="img-fluid mx-auto d-block"
                  src={dance.content.image.filename}
                />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div className="bd-desc">
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-muted">
                        <small>{dance.content.count}</small>
                      </p>
                    </li>
                    <li>
                      <b className="h5">{dance.content.title}</b>
                    </li>
                    <li>
                      <small id="intro">
                        <hr />
                        {dance.content.description}
                      </small>
                    </li>                               
                  </ul>                  
                      <button
                          className="btn-active"
                          onClick={() => {
                            setCount(count + key);
                            setShow(true);
                          }}
                        >
                          {dance.content.btn_register}
                      </button>                      
                </div>
              </Col>
            </Row>
          );
        })}
        <Offcanvas
          show={show}
          onHide={() => {
            setShow(false);
            setCount(0);
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {process.env.CONTACT_FORM_HEADER[router.locale]}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <ContactForm locale={router.locale}>
              {danceForm[count]}
                </ContactForm>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </SbEditable>
  );
};

export default DanceList;
