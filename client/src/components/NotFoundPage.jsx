import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return <section className="empty-state"><p className="eyebrow">404</p><h1>That page wandered off.</h1><Link className="button button-dark" to="/">Return home <span>→</span></Link></section>;
}
