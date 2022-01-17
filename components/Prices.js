import React, { ReactDOM } from "react";
import SbEditable from "storyblok-react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useRouter } from "next/router";
import Offcanvas from "react-bootstrap/Offcanvas";
import ContactForm from "./ContactForm";

function Prices({ blok }) {
  const [commentField, setCommentField] = useState(0);
 

  const rows = [
    "tb1_all",
    "tb2_day",
    "tb3_student_day",
    "tb4_student",
    "tb5_individual",
    "tb6_family",
    "tb7_single_option",
    "tb8_other_option",
  ];

  const typeTicket = [
    0, 1
  ];
  const lessonTicket = [
    4, 8, 12, 16, 20
  ];

  var acordionTitle = blok[rows[0]].thead[0].value;
  var acordionTitle1 = blok[rows[0]].tbody[0].body[0].value;
  var acordionTitle2 = blok[rows[0]].thead[1].value;

  const [countTicket, setCountTicket] = useState(rows[0]);
  const [countType, setCountType] = useState(0);
  const [countLesson, setCountLesson] = useState(1);


  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <SbEditable content={blok}>
      <Container key={blok._uid}>
        <Row>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div>
                  <sup>{process.env.PRICE_FIELD[router.locale].ticket}</sup>
                  <p className="h5">
                    <b id="p1" style={{ textTransform: "uppercase" }}>{acordionTitle}</b>
                  </p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {rows.map((item, i) => {
                  if (i != 6) {
                    if (i != 7) {
                      return (
                        <div className="bd-desc" key={item}>
                          <button
                            className="btn-blind"
                            type="submit"
                            data-toggle="collapse"
                            onClick={() => {
                              document.getElementById("p1").innerHTML =
                                blok[rows[i]].thead[0].value;
                              document.getElementById("btn-0").innerHTML =
                                blok[rows[i]].tbody[0].body[0].value;
                              document.getElementById("btn-1").innerHTML =
                                blok[rows[i]].tbody[1].body[0].value;
                              document.getElementById("p2").innerHTML =
                                blok[rows[i]].tbody[0].body[0].value;
                              setCountTicket(rows[i]);
                            }}
                          >
                            {blok[rows[i]].thead[0].value}
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
                  <sup>{process.env.PRICE_FIELD[router.locale].type}</sup>

                  <p className="h5">
                    <b id="p2" style={{ textTransform: "uppercase" }}>
                      {acordionTitle1}
                    </b>
                  </p>
                </div>

              </Accordion.Header>
              <Accordion.Body>
                <div className="bd-desc">
                  <button
                    id="btn-0"
                    className="btn-blind"
                    type="submit"
                    data-toggle="collapse"
                    onClick={() => {
                      document.getElementById("p2").innerHTML =
                        blok[countTicket].tbody[0].body[0].value;
                        setCountType(typeTicket[0]);
                    }}
                  >
                    <span id="btn-0">{process.env.PRICE_TYPE[router.locale].first}</span>
                  </button>
                </div>
                <div className="bd-desc">
                  <button
                    className="btn-blind"
                    type="submit"
                    data-toggle="collapse"
                    onClick={() => {
                      document.getElementById("p2").innerHTML =
                        blok[countTicket].tbody[1].body[0].value;
                      setCountType(typeTicket[1]);
                    }}
                  >
                    <span id="btn-1">{process.env.PRICE_TYPE[router.locale].second}</span>
                  </button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div>
                  <sup>{process.env.PRICE_FIELD[router.locale].count}</sup>
                  <p className="h4">
                    <b id="p3">{acordionTitle2}</b>
                  </p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {lessonTicket.map((item, i) => {
                  return (
                    <div className="bd-desc" key={item}>
                      <button
                        className="btn-blind"
                        type="submit"
                        data-toggle="collapse"
                        onClick={() => {
                          document.getElementById("p3").innerHTML =
                            lessonTicket[i];
                          setCountLesson(i + 1);
                        }}
                      >
                        {lessonTicket[i]}
                      </button>
                    </div>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
        <Row>       
          <Col>          
            <div className="price-desc">
              <sup>{blok[rows[6]].thead[0].value}</sup>
              <br />
              <b>{blok[rows[6]].thead[1].value}</b>
            </div>           
          </Col>         
        </Row>
        <Row>          
          <Col xs={12} md={6}>   
          <div className="price-desc">         
              <sup>{blok[rows[6]].tbody[1].body[0].value}</sup>
              <br />
              <b>{blok[rows[6]].tbody[1].body[1].value + " " + "₴"}</b>
              <br />
              <b>{blok[rows[6]].tbody[2].body[1].value + " " + "₴"}</b>  
              </div>                   
          </Col>
          <Col xs={12} md={6}>    
          <div className="price-desc">        
              <sup>{blok[rows[6]].tbody[3].body[0].value}</sup>
              <br />
              <b>{blok[rows[6]].tbody[3].body[1].value + " " + "₴"}</b>
              <br />
              <b>{blok[rows[6]].tbody[4].body[1].value + " " + "₴"}</b>  
              </div>                    
          </Col>               
        </Row>
        <Row>          
          <Col xs={12} md={6}>
          <div className="price-desc">
              <sup>{blok[rows[6]].tbody[0].body[0].value}</sup>
              <br />
              <b>{blok[rows[6]].tbody[0].body[1].value + " " + "₴"}</b>
           </div>
          </Col>
          <Col xs={12} md={6}>
          <div className="price-desc">
              <sup>{blok[rows[6]].tbody[5].body[0].value}</sup>
              <br />
              <b>{blok[rows[6]].tbody[5].body[1].value + " " + "₴"}</b>
            </div>
          </Col>              
        </Row>    
        <Row>       
          <Col>          
            <div className="price-desc">
              <b>{blok.tb9_commission}</b>
            </div>           
          </Col>         
        </Row>
        <Row>       
          <Col>          
            <div className="price-desc">
              <b>{blok.note}</b>
            </div>           
          </Col>         
        </Row>
        <Row>
          <div className="main-form"  id="price">
          <button
            className="priceButton"
            type="checkbox"
            onClick={() => {
              let sign;
              if (blok[countTicket].tbody[countType].body[countLesson].value - parseInt(blok[countTicket].tbody[countType].body[countLesson].value) == 0) {
                sign = "₴";
                console.log(blok[countTicket].tbody[countType].body[countLesson].value);
              } else { sign = " "; }
              console.log(typeof blok[countTicket].tbody[countType].body[countLesson].value);
              document.getElementById("p4").innerHTML =
                blok[countTicket].tbody[countType].body[countLesson].value +
                " " +
                sign;
              setCommentField(blok[countTicket].thead[0].value + ", " + blok[countTicket].tbody[countType].body[0].value + ", " + lessonTicket[countLesson - 1]);
            }}
          >
            <h1 id="p4">0</h1>
            <span className="h6" style={{ textTransform: "uppercase" }}>
              {process.env.PRICE_COUNT[router.locale]}
            </span>
          </button>
          </div>
        </Row>
        <Row>
        <div className="main-form">
          <button
            type="button"
            className="btn-active mt-3 mb-3"
            onClick={() => {
              setShow(true);
            }}
          >
            {blok.btn_register}
          </button>
          </div>
        </Row>      
        <Offcanvas show={show} onHide={() => setShow(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {process.env.CONTACT_FORM_HEADER[router.locale]}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <ContactForm locale={router.locale}>
                {commentField}
              </ContactForm>{" "}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </SbEditable>
  );
}

export default Prices;
