import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import router, { useRouter } from "next/router";

function ContactForm({ locale, children }) {
  const router = useRouter();
  async function handleOnSubmit(e) {
    e.preventDefault();

    console.log("Sending");
    let formData = {
      name,
      phone,
      message,
    };

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
  }
  const defaultLocale = locale === "ru" ? "/" : `/${locale}/`;

  var blokContact = {
    form_name: process.env.CONTACT_FORM_NAME[locale],
    name: process.env.CONTACT_NAME[locale],
    form_email: process.env.CONTACT_FORM_EMAIL,
    email: process.env.CONTACT_EMAIL,
    form_phone: process.env.CONTACT_FORM_PHONE,
    phone: process.env.CONTACT_PHONE[locale],
    message: process.env.CONTACT_MESSAGE[locale],
    text: process.env.CONTACT_TEXT,
    btn: process.env.CONTACT_BTN[locale],
  };

  function validateName() {
    var name = document.getElementById("name").value;

    if (name.length == 0) {
      producePrompt("❗ Обязательное поле", "name-error", "redError");
      return false;
    }

    producePrompt("✅", "name-error", "greenError");
    return true;
  }

  function validatePhone() {
    var phone = document.getElementById("phone").value;

    if (phone.length == 0) {
      producePrompt("❗ Обязательное поле", "phone-error", "redError");
      return false;
    }

    if (phone.length != 10) {
      producePrompt(
        "❗ Пожалуйста, введите номер телефона в формате 0951870180",
        "phone-error",
        "redError"
      );
      return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
      producePrompt(
        "❗ Номер телефона должен состоять только из цифр",
        "phone-error",
        "redError"
      );
      return false;
    }

    producePrompt("✅", "phone-error", "greenError");
    return true;
  }

  function validateForm() {
    if (!validateName() || !validatePhone()) {
      jsShow("submit-error");
      producePrompt(
        "❗ Внесите правки для продолжения",
        "submit-error",
        "redError"
      );
      setTimeout(function () {
        jsHide("submit-error");
      }, 2000);
      return false;
    } else { setTimeout(router.reload(), 3000);     
      alert("Message sent successfully!");}
  }

  function jsShow(id) {
    document.getElementById(id).style.display = "block";
  }

  function jsHide(id) {
    document.getElementById(id).style.display = "none";
  }

  function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).className = color;
  }

  return (
    <div className="bd-desc mb-5">
      <div className={styles.grid}>
        <form method="post" onSubmit={handleOnSubmit}>
          <Container>
            <Row className="p-2">
              <Col xs="auto">
                <label htmlFor="name">{blokContact.form_name}</label>
              </Col>
              <Col xs className="mb-2">
                <span className="error-message" id="name-error"></span>
              </Col>
              <Col xs={12}>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={blokContact.name}
                  onKeyUp={() => setTimeout(validateName, 2500)}
                />
              </Col>
            </Row>
            <Row className="p-2">
              <Col xs="auto">
                <label htmlFor="phone">{blokContact.form_phone}</label>
              </Col>
              <Col xs className="mb-2">
                <span className="error-message" id="phone-error"></span>
              </Col>
              <Col xs={12}>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder={blokContact.phone}
                  onKeyUp={() => setTimeout(validatePhone, 2500)}
                />
              </Col>
            </Row>
            <Row className="p-2">
              <Col xs="auto" className="mb-2">
                <label htmlFor="message">{blokContact.message + " "}</label>
              </Col>
              <Col xs>
                <span className="error-message" id="message-error"></span>
              </Col>
              <Col xs={12}>
                <textarea
                  id="message"
                  type="text"
                  name="message"
                  placeholder={blokContact.text}
                  value={children}
                />
              </Col>
            </Row>
            <Row className="p-2">
              <Col xs={12}>
                <button className="btn-active" onClick={validateForm}>
                  {blokContact.btn}
                </button>
                <span className="error-message" id="submit-error"></span>
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
