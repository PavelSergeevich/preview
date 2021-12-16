import React from "react";
import { Container, Row, Col } from "reactstrap";
import Telegram from "./icons/Telegram";
import Viber from "./icons/Viber";
import Maps from "./icons/Maps";

const Footer = ({ locale, locales }) => {
  const defaultLocale = locale === "uk" ? "/" : `/${locale}/`;

  return (
    <footer className="footer">  
    <div className="max-size">    
        <Container className="footer-box">
          <Row className="row-footer">
            <Col xs={12} md={4} id="col-1">
              <div className="main-form">              
              <ul className="list-unstyled">
                <li>
                  <sup>{process.env.FOOTER_ADRESS_RESOLVE[locale]}</sup>
                </li>
                <li>
                  <b className="h6">{process.env.FOOTER_CITY[locale]}</b>
                </li>
                <li id="footer">
                  <b className="h6">{process.env.FOOTER_UNG[locale]}</b>
                </li>
                <li>
                  <b className="h6">{process.env.FOOTER_ADRESS[locale]}</b>
                </li>
              </ul>
              </div>
            </Col>
            <Col xs={12} md={4} id="col-2">
            <div className="main-form"> 
              <ul className="list-unstyled">
                <li>
                  <sup>{process.env.FOOTER_PHONE_RESOLVE[locale]}</sup>
                </li>
                <li>
                  <a href={`tel:${process.env.FOOTER_PHONE[0]}`} className="h6" id="tel">{process.env.FOOTER_PHONE[0]}</a>
                </li>
                <li>
                  <a href={`tel:${process.env.FOOTER_PHONE[1]}`} className="h6" id="tel">{process.env.FOOTER_PHONE[1]}</a>
                </li>
              </ul>
              </div>
            </Col>
            
            <Col xs={4} md={1} className="main-form" id="col-4">
              <Maps />
            </Col>
            <Col xs={4} md={1} className="main-form" id="col-5">
              <Viber />
            </Col>
            <Col xs={4} md={1} className="main-form" id="col-6">
              <Telegram />
            </Col>
          </Row>
        </Container>
        </div>
    </footer>
  );
};

export default Footer;
