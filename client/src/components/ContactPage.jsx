/*
    Author: Darryn Long
    Date: 09/27/2026
    Contact Page
*/

import { useState } from "react";
import PageIntro from "./PageIntro";

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mwlpqryv", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <>
      <PageIntro eyebrow="Contact me" title="Have a good project in mind?" copy="Let's connect, create, and build together. Fill out the form below to get in touch." />
      <section className="contact-layout">
        <div className="contact-panel-wrapper">
          <aside className="contact-panel">
            <p className="eyebrow">Find me here</p>
            <a href="mailto:darrynl.business@gmail.com">darrynl.business@gmail.com</a>
            <a href="tel:+1 437 808 2137">[+1 437 808 2137]</a>
            <p>[Toronto, Ontario]</p>
            <div className="social-links">
              <a className="button button-outline-white" href="https://github.com/DarrynLong" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="button button-outline-white" href="https://www.linkedin.com/in/a-darryn-long/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </aside>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label>First name<input name="firstName" required placeholder="Your First Name" /></label>
                <label>Last name<input name="lastName" required placeholder="Your Last Name" /></label>
            </div>
          <label>Email address<input name="email" type="email" required placeholder="yourEmail@example.com" /></label>
          <label>Contact number<input name="phone" type="tel" placeholder="(000) 000-0000" /></label>
          <label>Message<textarea name="message" required rows="5" placeholder="Tell me a little about your project..." /></label>
          <button className="button button-dark" type="submit" disabled={submissionStatus === "sending"}>
            {submissionStatus === "sending" ? "Sending..." : "Send message"} <span>↗</span>
          </button>
          {submissionStatus === "success" && <p className="form-note" aria-live="polite">Thanks. Your message was sent!</p>}
          {submissionStatus === "error" && <p className="form-note" aria-live="polite">Something went wrong. Please try again or email me directly.</p>}
        </form>
      </section>
    </>
  );
}
