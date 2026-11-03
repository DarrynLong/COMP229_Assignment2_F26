/*
    Author: Darryn Long
    Date: 09/27/2026
    Services Page
*/

import PageIntro from "./PageIntro";
import { services } from "../data/portfolioData";

// Service entries / service data are kept in portfolioData.js
export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Useful skills, thoughtfully applied." copy="Helping people bring their ideas to life." />
      <section className="services-list">
        {services.map(([number, title, description]) => (
        <article key={number}>
            <div className="service-content">
                <span className="service-number">{number}</span>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </article>
        ))}
      </section>
    </>
  );
}
