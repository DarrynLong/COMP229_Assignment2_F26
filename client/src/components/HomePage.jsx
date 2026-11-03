/*
    Author: Darryn Long
    Date: 09/27/2026
    Home Page
*/

import { Link } from "react-router-dom"; 

export default function HomePage() {
  return (
    <>
        <section className="hero">
            
            <div className="hero-copy">
                <p className="eyebrow">Game programmer · Software developer · Digital artist</p>
                <h1>Building worlds<br /><em>worth exploring.</em></h1>
                <p className="hero-text">A Junior Software Engineer specializing in Game Development. Making thoughtful digital experiences where code and creativity meet.</p>
                    <div className="button-row">
                        <Link className="button button-dark" to="/projects">View selected work <span>↗</span></Link>
                        <Link className="button button-dark" to="/about">More about me <span>→</span></Link>
                    </div>
            </div>
            
            <div className="hero-art">
                <img src="/project-images/homepageArt.png" alt="Abstract Moonbeam Games graphic" />
                <span className="art-label">Creative practice<br />since 2021</span>
            </div>
     
        </section>
        <section className="mission">
            <p className="eyebrow">The mission</p>
            <p className="mission-text">Make work that feels <strong>human, playful, and memorable</strong> — from the first sketch to the final interaction.</p>
        </section>
    </>
  );
}
