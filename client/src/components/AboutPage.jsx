/*
    Author: Darryn Long
    Date: 09/27/2026
    About Page
*/
import PageIntro from "./PageIntro";

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About me" title="A creative technologist building interactive experiences." copy="Game programmer • Software developer • Problem solver" />
      
      <section className="about-grid">
        <div className="portrait-placeholder">
          <img src="/project-images/profile_headshot.png"alt="Darryn Long headshot"/>
        </div>
            <div className="about-copy">
                <p className="eyebrow">GAME PROGRAMMER • DEVELOPER • ARTIST</p>
                <h2>Hello World, I'm Darryn.</h2>
                <p>Currently a Game Programming student and creative technologist who likes figuring out how things work — and then finding ways to make them better. My background spans programming, visual arts, IT infrastructure, and team leadership, giving me a mix of technical and creative experiences.</p>
                <p>Game development is where those interests come together. I enjoy building systems, experimenting with ideas, and creating experiences that combine code, art, and design.</p>
                <a className="button button-outline" href="/DarrynLongResume2026.pdf" target="_blank" rel="noreferrer">Download resume <span>↓</span></a>
            </div>

      </section>
    </>
  );
}





