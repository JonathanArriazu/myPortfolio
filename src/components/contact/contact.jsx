import React from "react";
import "./contact.css";

import doneAnimation from "../../../public/animation/done.json";
import emailAnimation from "../../../public/animation/email.json";

import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzggaav");

  const {t} = useTranslation();

  return (
    <section id="contact" className="contact-me">
      <h1 className="title">
        <span className="icon-envelope"></span>
          {t('contact')}
      </h1>
      <p className="sub-title">
        {t('contact-intro')}
      </p>

      <div className="flex form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">{t('email')}</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">{t('message')}</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex submit-container">
            <button className="submit" type="submit" disabled={state.submitting}>
              {state.submitting ? `${t('sending-message')}` : `${t('submit')}`}
            </button>
          </div>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                style={{ height: 40 }}
                loop={false}
                animationData={doneAnimation}
              />
              {t('message-success')}
            </p>
          )}
        </form>
        <div className="animation-container">
          <Lottie
            className="contact-animation"
            animationData={emailAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
