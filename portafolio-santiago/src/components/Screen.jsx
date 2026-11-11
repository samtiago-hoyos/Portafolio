export default function Screen({ title, children }) {
  return (
    <main className="screen">
      <div className="section-heading">
        <span className="eyebrow">PORTAFOLIO PERSONAL</span>
        <h1>{title}</h1>
      </div>
      {children}
    </main>
  )
}
