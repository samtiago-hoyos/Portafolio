import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">ERROR 404</span>
      <h1>Esta página no existe<span className="brand-dot">.</span></h1>
      <p>La dirección que intentaste abrir no está disponible.</p>
      <Link className="button button-primary" to="/">Volver al inicio</Link>
    </main>
  )
}
