import heroImage from '../assets/hero.png'
import { site } from '../content/site'
import { useHeroParallax } from '../hooks/useHeroParallax'

export function Hero() {
  const bgOffset = useHeroParallax(0.04)

  return (
    <section id="top" className="hero">
      <div className="hero__bg" style={{ transform: `translate3d(0, ${bgOffset}px, 0)` }} aria-hidden>
        <div className="hero__gradient" />
        <div className="hero__grid" />
        <div className="hero__noise" />
      </div>

      <div className="hero__content hero__content--split">
        <div className="hero__copy">
          <p className="hero__eyebrow">Hello, I am</p>
          <h1 className="hero__title">
            <span>{site.name}</span>
          </h1>
          <p className="hero__role">{site.role} | Exploring Machine Learning</p>
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__support">{site.heroSupporting}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View My Work
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <figure className="hero__visual glass" aria-label="Profile illustration">
          <img className="hero__visual-image" src={heroImage} alt="Profile illustration" />
          <figcaption className="hero__visual-caption">Building clean systems, thoughtful interfaces, and useful AI.</figcaption>
        </figure>

        <div className="hero__signal hero__signal--one" aria-hidden />
        <div className="hero__signal hero__signal--two" aria-hidden />
        </div>
    </section>
  )
}
