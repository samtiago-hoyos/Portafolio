import { Link } from 'react-router-dom'
import Screen from '../components/Screen.jsx'

export default function Home() {
  const name = 'Santiago Hoyos Montoya'
  const role = 'Estudiante de Análisis y Desarrollo de Software'

  return (
    <Screen title="Inicio">
      <section className="hero">
        <div className="hero-copy">
          <span className="availability"><span /> En formación · Abierto a aprender</span>
          <p className="intro">Hola, soy</p>
          <h2>{name}<span className="brand-dot">.</span></h2>
          <p className="role">{role}</p>
          <p className="hero-description">
            Me interesa el desarrollo de software y la creación de soluciones útiles.
            Actualmente sigo fortaleciendo mis conocimientos en programación,
            desarrollo web y buenas prácticas.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/proyectos">Ver mis proyectos <span>↗</span></Link>
            <Link className="button button-secondary" to="/contacto">Contactarme</Link>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />
          <div className="profile-avatar">SHM</div>
          <span className="profile-caption">DESARROLLO · CREATIVIDAD · APRENDIZAJE</span>
        </div>
      </section>
      <section className="about-strip">
        <div><span className="eyebrow">01 / SOBRE MÍ</span><h3>Aprender, construir y mejorar.</h3></div>
        <p>Soy estudiante y disfruto aprender cómo funcionan las aplicaciones desde su estructura hasta la experiencia que ofrecen a las personas.</p>
      </section>
    </Screen>
  )
}
