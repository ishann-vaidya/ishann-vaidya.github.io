import { site } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Skills() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className={`section__head reveal ${visible ? 'reveal--visible' : ''}`}>
        <span className="section__label">Skills</span>
        <h2 className="section__title">Tools and crafts</h2>
        <p className="section__lede">Grouped for clarity—from languages and web stacks to ML workflows and collaboration.</p>
      </div>

      <div className="skills__grid">
        {site.skills.map((cat, i) => (
          <div
            key={cat.title}
            className={`glass skills__card reveal ${visible ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: `${0.06 + i * 0.05}s` }}
          >
            <h3 className="skills__card-title">{cat.title}</h3>
            <ul className="skills__tags">
              {cat.items.map((item) => (
                <li key={item} className="skills__tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
