import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="Ir al inicio">
        <span className="brand-mark">SH</span>
        <span>Santiago<span className="brand-dot">.</span></span>
      </NavLink>
      <nav aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  )
}
