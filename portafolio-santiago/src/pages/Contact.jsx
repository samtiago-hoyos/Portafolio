import Screen from '../components/Screen.jsx'

export default function Contact() {
  return (
    <Screen title="Contacto">
      <section className="contact-panel">
        <div>
          <span className="eyebrow">HABLEMOS</span>
          <h2>¿Tienes una idea o proyecto?</h2>
          <p className="page-lead">Puedes escribirme o visitar mi perfil de GitHub para conocer más sobre mi aprendizaje y mis proyectos.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:santiagomontoyahoyos@gmail.com"><span>Correo electrónico</span><strong>santiagomontoyahoyos@gmail.com ↗</strong></a>
          <a href="https://github.com/samtiago-hoyos" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/samtiago-hoyos ↗</strong></a>
        </div>
      </section>
    </Screen>
  )
}
