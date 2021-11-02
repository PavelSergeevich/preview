import React from "react";
import { Container, Row, Col } from "reactstrap";
import SbEditable from "storyblok-react";
import { useRouter } from "next/router";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import ContactForm from "./ContactForm";

const FeaturedPosts = ({ blok }) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const router = useRouter();
  var danceForm = [];

  return (
    <SbEditable content={blok} key={blok._uid}>
      <Container>
        {blok.posts.map((post, key) => {
          const lang = post.lang === "default" ? "/uk" : `/${post.lang}`;
          danceForm[key] = post.content.title;
          return (
            <Row key={key}>
              <Col sm={12} md={6} lg={6}>
                <img
                  className="img-fluid mx-auto d-block"
                  src={post.content.image}
                />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div className="bd-desc">
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-muted">
                        <small>{post.content.count}</small>
                      </p>
                    </li>
                    <li>
                      <b className="h5">{post.content.title}</b>
                    </li>
                    <li>
                      <small id="intro">
                        <hr />
                        {post.content.intro}
                      </small>
                    </li>
                    <li>
                      <div className="btn-case">
                        <button
                          className="btn-active"
                          onClick={() => {
                            setCount(count + key);
                            setShow(true);
                          }}
                        >
                          {post.content.link_btn}
                        </button>
                      </div>
                    </li>
                  </ul>
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

export default FeaturedPosts;
