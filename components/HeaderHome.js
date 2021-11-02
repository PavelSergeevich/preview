import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Instagram from "./icons/Instagram";
import HomeArrow from "./icons/HomeArrow";

const HeaderHome = ({ locale, locales }) => {
  const router = useRouter();

  const defaultLocale = locale === "ru" ? "/" : `/${locale}/`;

  return (
    <div className="max-size">
      <ul className="nav nav-lang">
        <li id="home-arrrow" className="nav-item">
          {router.asPath == "/" || router.asPath == `/${locale}` ? (
            <> </>
          ) : (
            <HomeArrow />
          )}
        </li>
        <li className="nav-item">
          <Instagram />
        </li>
        <li className="nav-item">
          <div className="nav-lang">
            <NavDropdown title={process.env.HEADER_LANG[locale]}>
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
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeaderHome;
