/*
    Author: Darryn Long
    Date: 09/27/2026
    Main App Component
*/

// Importing React Router components and the pages for the site
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import EducationPage from "./components/EducationPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import ProjectsPage from "./components/ProjectsPage";
import ServicesPage from "./components/ServicesPage";
import "./App.css";

// Routing links for the main navigation menu
const navigation = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/education", "Education"],
  ["/services", "Services"],
  ["/contact", "Contact"],
];


// The main layout of the site, including header, main content, and footer
function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="logo" to="/" aria-label="Darryn Long home">
          <span>DL</span>
          <b>DARRYN<br />LONG</b>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <span className="nav-label">Explore</span>
          <div className="nav-links">
            {navigation.map(([path, label]) => (
              <NavLink key={path} to={path} end={path === "/"}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer>
        <span>© 2026 Darryn Long</span>
        <span>Portfolio · Moonbeam_dev</span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
