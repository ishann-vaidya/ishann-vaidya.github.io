import { site } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Experience() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className={`section__head reveal ${visible ? 'reveal--visible' : ''}`}>
        <span className="section__label">Experience</span>
        <h2 className="section__title">Achievements & campus</h2>
        <p className="section__lede">Hackathons, national programs, and leadership roles that shaped how I ship and collaborate.</p>
      </div>

      <div className="experience__layout">
        <div className="experience__col">
          <h3 className="experience__subhead">Achievements & competitions</h3>
          <ul className="experience__timeline">
            {site.achievements.map((a, i) => (
              <li
                key={a.title + a.date}
                className={`experience__item reveal ${visible ? 'reveal--visible' : ''}`}
                style={{ transitionDelay: `${0.05 + i * 0.04}s` }}
              >
                <span className="experience__dot" aria-hidden />
                <div className="experience__item-body glass">
                  <div className="experience__item-top">
                    <p className="experience__item-title">{a.title}</p>
                    <span className="experience__date">{a.date}</span>
                  </div>
                  <p className="experience__org">{a.org}</p>
                  {a.detail ? <p className="experience__detail">{a.detail}</p> : null}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="experience__col">
          <h3 className="experience__subhead">Campus involvement</h3>
          <div className="experience__cards">
            {site.campus.map((c, i) => (
              <div
                key={c.title}
                className={`glass experience__campus reveal ${visible ? 'reveal--visible' : ''}`}
                style={{ transitionDelay: `${0.12 + i * 0.06}s` }}
              >
                <p className="experience__campus-title">{c.title}</p>
                <p className="experience__campus-role">{c.role}</p>
                <p className="experience__org">{c.org}</p>
                {'date' in c && c.date ? <p className="experience__muted">{c.date}</p> : null}
                {c.detail ? <p className="experience__detail">{c.detail}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
