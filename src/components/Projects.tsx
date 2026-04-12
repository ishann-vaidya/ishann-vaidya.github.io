import { site } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Projects() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className={`section__head reveal ${visible ? 'reveal--visible' : ''}`}>
        <span className="section__label">Projects</span>
        <h2 className="section__title">Selected work</h2>
        <p className="section__lede">Problem-first builds with clear technical boundaries and links to source.</p>
      </div>

      <div className="projects__list">
        {site.projects.map((project, i) => (
          <article
            key={project.title}
            className={`projects__card glass reveal ${visible ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: `${0.08 + i * 0.1}s` }}
          >
            <div className="projects__card-top">
              <div>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__meta">
                  <span>{project.year}</span>
                  <span className="projects__dot" aria-hidden />
                  <span>{project.badge}</span>
                </p>
              </div>
              <div className="projects__links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    {link.label}
                    <span aria-hidden className="projects__link-arrow">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="projects__body">
              <div className="projects__block">
                <span className="projects__label">Problem</span>
                <p>{project.problem}</p>
              </div>
              <div className="projects__block">
                <span className="projects__label">Solution</span>
                <p>{project.solution}</p>
              </div>
              <div className="projects__block">
                <span className="projects__label">Impact</span>
                <p>{project.impact}</p>
              </div>
            </div>

            <div className="projects__stack">
              {project.stack.map((tech) => (
                <span key={tech} className="projects__pill">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
