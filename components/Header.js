import React from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Instagram from "./icons/Instagram";
import HomeArrow from "./icons/HomeArrow";

const Header = ({ locale, locales }) => {
  const router = useRouter();

  const defaultLocale = locale === "ru" ? "/" : `/${locale}/`;

  return (
    <div className="max-size">
      <Container className="p-0 m-0">
        <Row className="nav nav-lang">
          <Col xs="auto" id="nav-lang-left" className="p-0 m-0 nav-item">
            {router.asPath == "/" || router.asPath == `/${locale}` ? (
              <> </>
            ) : (
              <HomeArrow />
            )}
          </Col>
          <Col xs className="p-0 m-0 nav-item"></Col>
          <Col xs="auto" className="p-0 m-0 nav-item">
            <Instagram />
          </Col>
          <Col xs="auto" className="p-0 m-0 nav-item">
            <NavDropdown
              title={process.env.HEADER_LANG[locale]}
              className="nav-lang"
            >
              {locales.map((loc, i) => {
                return (
                  <NavDropdown.Item
                    href={`/${loc}`}
                    key={loc}
                    style={{ textAlign: "center" }}
                  >
                    <span className="lead">{process.env.HEADER_LANG[loc]}</span>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
