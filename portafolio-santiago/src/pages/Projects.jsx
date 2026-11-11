import Screen from '../components/Screen.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  return (
    <Screen title="Mis proyectos">
      <p className="page-lead">Algunos ejercicios y proyectos académicos en los que he trabajado durante mi proceso de aprendizaje.</p>
      <section className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            type={project.type}
          />
        ))}
      </section>
      <p className="note">Nota: estos proyectos se presentan como muestras académicas. Puedes actualizar sus descripciones y enlaces cuando publiques cada repositorio.</p>
    </Screen>
  )
}
