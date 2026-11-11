export default function ProjectCard({ title, description, tags = [], type }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-icon">⌘</span>
        <span className="project-type">{type}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="tag-list">
        {tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
      </ul>
    </article>
  )
}
