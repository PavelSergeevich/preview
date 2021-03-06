import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";

const Buttons = ({ locale, locales }) => {
  const defaultLocale = locale === "uk" ? "/" : `/${locale}/`;
  const router = useRouter();

  function ActiveLink({ children, href, style }) {
    const handleClick = (e) => {
      e.preventDefault();
      router.push(href);
    };

    return (
      <a
        href={href}
        onClick={() => {
          router.reload();
          handleClick;
        }}
        className={style}
      >
        {children}
      </a>
    );
  }

  return (
    <div className="max-size">
      <Container>
        <Row className="mt-3 mb-3">
          <Col xs={6} sm={6} md={4} lg={3} id="box-1">
            <div className="card-mc">
              <img src="mastercard.svg" alt="MC LOGO" height="24px" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={6} className="bd-desc" id="box-2">
            {router.asPath == "/about" ||
            router.asPath == `/${locale}/about` ? (
              <> </>
            ) : (
              <ActiveLink href={`/${locale}/about`} style={"btn-active"}>
                {process.env.FOOTER_ABOUT[locale]}
              </ActiveLink>
            )}
          </Col>
          <Col xs={6} sm={6} md={4} lg={3} id="box-3">
            <div className="card-visa">
              <img src="visa_logo.svg" alt="VISA LOGO" height="24px" />
            </div>
          </Col>
          <Col xs={12} className="bd-desc" id="box-4">
            {router.asPath == "/docs" || router.asPath == `/${locale}/docs` ? (
              <> </>
            ) : (
              <ActiveLink href={`/${locale}/docs`} style={"btn-blind"}>
                {process.env.FOOTER_DOCS[locale]}
              </ActiveLink>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buttons;
