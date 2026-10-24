import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="page" id="main">
      <h1>Page not found</h1>
      <p>We could not find that page.</p>
      <Link className="btn primary" to="/">Go to Home</Link>
    </main>
  );
}
