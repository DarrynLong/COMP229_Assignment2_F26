/*
    Author: Darryn Long
    Date: 09/27/2026
    Page Intro Component
*/

// Shared heading used by the other pages
export default function PageIntro({ eyebrow, title, copy }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-copy">{copy}</p>
    </section>
  );
}
