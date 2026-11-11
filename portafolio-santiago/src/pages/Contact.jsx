import Screen from '../components/Screen.jsx'

const CONTACT_LINKS = [
  {
    label: 'Correo electrónico',
    value: 'santiagomontoyahoyos@gmail.com',
    href: 'mailto:santiagomontoyahoyos@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/samtiago-hoyos',
    href: 'https://github.com/samtiago-hoyos',
    external: true,
  },
]

export default function Contact() {
  return (
    <Screen title="Contacto">
      <section className="contact-panel">
        <header className="contact-intro">
          <span className="eyebrow">HABLEMOS</span>
          <h2>¿Tienes una idea o proyecto?</h2>
          <p className="page-lead">
            Puedes escribirme o visitar mi perfil de GitHub para conocer más sobre mi aprendizaje y mis proyectos.
          </p>
        </header>

        <div className="contact-links">
          {CONTACT_LINKS.map(({ label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <span>{label}</span>
              <strong>
                {value} <span aria-hidden="true">↗</span>
              </strong>
            </a>
          ))}
        </div>
      </section>
    </Screen>
  )
}