import React from "react";
import SbEditable from "storyblok-react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useRouter } from "next/router";
import Offcanvas from "react-bootstrap/Offcanvas";
import ContactForm from "./ContactForm";

function Prices({ blok }) {
  const rows = [
    "Row",
    "Row_1",
    "Row_2",
    "Row_3",
    "Row_4",
    "Row_5",
    "Row_6",
    "Row_7",
  ];
  const titles = [
    "title",
    "title_1",
    "title_2",
    "title_3",
    "title_4",
    "title_5",
    "title_6",
    "title_7",
  ];

  var acordionTitle = blok[titles[0]];
  var acordionTitle1 = blok[rows[0]].tbody[0].body[0].value;
  var acordionTitle2 = blok[rows[0]].thead[1].value;
  const btnStyle2 = {
    width: "100%",
    textAlign: "center",
    fontSize: "32px",
    color: "#a70000",
  };
  var countTicket = blok[rows[0]];
  var countType = 0;
  var countLesson = 1;
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <SbEditable content={blok}>
      <Container key={blok._uid}>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div>
                    <sup>Тип абонементу</sup>
                    <h4>
                      <b id="p1">{acordionTitle}</b>
                    </h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {titles.map((item, i) => {
                    if (titles[i] != "title_6") {
                      if (titles[i] != "title_7") {
                        return (
                          <div className="bd-desc" key={item}>
                            <button
                              className="btn-blind"
                              type="submit"
                              data-toggle="collapse"
                              onClick={() => {
                                document.getElementById("p1").innerHTML =
                                  blok[titles[i]];
                                countTicket = blok[rows[i]];
                              }}
                            >
                              {blok[titles[i]]}
                            </button>
                          </div>
                        );
                      }
                    }
                  })}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div>
                    <sup>Вид абонементу</sup>
                    <h4>
                      <b id="p2">{acordionTitle1}</b>
                    </h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {blok.Row.tbody.map((item, i) => (
                    <div className="bd-desc" key={item}>
                      <button
                        className="btn-blind"
                        type="submit"
                        data-toggle="collapse"
                        onClick={() => {
                          document.getElementById("p2").innerHTML =
                            blok[rows[0]].tbody[i].body[0].value;
                          countType = i;
                        }}
                      >
                        {blok[rows[0]].tbody[i].body[0].value}
                      </button>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div>
                    <sup>Кількість занять</sup>
                    <h4>
                      <b id="p3">{acordionTitle2}</b>
                    </h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {blok.Row.thead.map((item, i) => {
                    if (blok[rows[0]].thead[i].value !== "")
                      return (
                        <div className="bd-desc" key={item}>
                          <button
                            className="btn-blind"
                            type="submit"
                            data-toggle="collapse"
                            onClick={() => {
                              document.getElementById("p3").innerHTML =
                                blok[rows[0]].thead[i].value;
                              countLesson = i;
                            }}
                          >
                            {blok[rows[0]].thead[i].value}
                          </button>
                        </div>
                      );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <button
              className="priceButton"
              type="checkbox"              
              onClick={() => {
                document.getElementById("p4").innerHTML =
                  countTicket.tbody[countType].body[countLesson].value +
                  " " +
                  "₴";
              }}
            >
              <div className="">
                <h1 id="p4">0</h1>
                <h5 style={{ textTransform: "uppercase" }}>
                  {process.env.PRICE_COUNT[router.locale]}
                </h5>
              </div>
            </button>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <div>
              <sup>{blok.Row_6.tbody[0].body[0].value}</sup>
              <br />
              <b>{blok.Row_6.tbody[0].body[1].value}</b>
            </div>
            <hr />
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={6} md={4}>
            <div>
              <sup>{blok.Row_6.tbody[2].body[0].value}</sup>
              <br />
              <b>{blok.Row_6.tbody[2].body[1].value + " " + "₴"}</b>
              <br />
              <b>{blok.Row_6.tbody[3].body[1].value + " " + "₴"}</b>
            </div>
            <hr />
          </Col>
          <Col xs={6} md={4}>
            <div>
              <sup>{blok.Row_6.tbody[4].body[0].value}</sup>
              <br />
              <b>{blok.Row_6.tbody[4].body[1].value + " " + "₴"}</b>
              <br />
              <b>{blok.Row_6.tbody[5].body[1].value + " " + "₴"}</b>
            </div>
            <hr />
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={6} md={4}>
            <div>
              <sup>{blok.Row_6.tbody[1].body[0].value}</sup>
              <br />
              <b>{blok.Row_6.tbody[1].body[1].value + " " + "₴"}</b>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div>
              <sup>{blok.Row_6.tbody[6].body[0].value}</sup>
              <br />
              <b>{blok.Row_6.tbody[6].body[1].value + " " + "₴"}</b>
            </div>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <button
              type="button"
              className="btn-active mt-3 mb-3"
              onClick={() => {
                setShow(true);
              }}
            >
              {blok.action_btn}
            </button>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Offcanvas show={show} onHide={() => setShow(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {process.env.CONTACT_FORM_HEADER[router.locale]}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <ContactForm locale={router.locale} />{" "}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </SbEditable>
  );
}

export default Prices;
