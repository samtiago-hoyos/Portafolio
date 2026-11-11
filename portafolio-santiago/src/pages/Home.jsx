import { Link } from 'react-router-dom'
import Screen from '../components/Screen.jsx'

const DEVELOPER_INFO = {
  name: 'Santiago Hoyos Montoya',
  role: 'Estudiante de Análisis y Desarrollo de Software',
  status: 'En formación · Abierto a aprender',
  caption: 'DESARROLLO · CREATIVIDAD · APRENDIZAJE',
  initials: 'SHM',
}

export default function Home() {
  return (
    <Screen title="Inicio">
      <section className="hero">
        <div className="hero-copy">
          <div className="availability">
            <span aria-hidden="true" /> {DEVELOPER_INFO.status}
          </div>
          
          <p className="intro">Hola, soy</p>
          
          <h1>
            {DEVELOPER_INFO.name}
            <span className="brand-dot" aria-hidden="true">.</span>
          </h1>
          
          <p className="role">{DEVELOPER_INFO.role}</p>
          
          <p className="hero-description">
            Me interesa el desarrollo de software y la creación de soluciones útiles.
            Actualmente sigo fortaleciendo mis conocimientos en programación,
            desarrollo web y buenas prácticas.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/proyectos">
              Ver mis proyectos <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-secondary" to="/contacto">
              Contactarme
            </Link>
          </div>
        </div>

        <div className="profile-card" aria-hidden="true">
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />
          <div className="profile-avatar">{DEVELOPER_INFO.initials}</div>
          <span className="profile-caption">{DEVELOPER_INFO.caption}</span>
        </div>
      </section>

      <section className="about-strip">
        <div>
          <span className="eyebrow">01 / SOBRE MÍ</span>
          <h2>Aprender, construir y mejorar.</h2>
        </div>
        <p>
          Soy estudiante y disfruto aprender cómo funcionan las aplicaciones desde su estructura hasta la experiencia que ofrecen a las personas.
        </p>
      </section>
    </Screen>
  )
}