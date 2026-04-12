import { site } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function About() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="about" className="section about" ref={ref}>
      <div className={`section__head reveal ${visible ? 'reveal--visible' : ''}`}>
        <span className="section__label">About</span>
        <h2 className="section__title">Engineering with intent</h2>
        <p className="section__lede">A concise snapshot of who I am, what I build, and where I am headed.</p>
      </div>

      <div className="about__grid">
        <div className={`glass about__card reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: '0.08s' }}>
          <h3 className="about__card-title">Story</h3>
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className="about__text">
              {p}
            </p>
          ))}
        </div>

        <div className="about__side">
          <div className={`glass about__card reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: '0.16s' }}>
            <h3 className="about__card-title">Education</h3>
            <p className="about__school">{site.education.school}</p>
            <p className="about__muted">{site.education.location}</p>
            <p className="about__degree">{site.education.degree}</p>
            <p className="about__honors">{site.education.honors}</p>
            <p className="about__grad">{site.education.graduation}</p>
          </div>

          <div className={`glass about__card reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: '0.24s' }}>
            <h3 className="about__card-title">Current focus</h3>
            <ul className="about__list">
              {site.about.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
