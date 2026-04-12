import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const { ref, visible } = useReveal<HTMLElement>()
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Portfolio: message from ${name || 'visitor'}`)
    const body = encodeURIComponent(
      `${message}\n\n—\n${name ? `Name: ${name}\n` : ''}${email ? `Reply-to: ${email}` : ''}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className={`section__head reveal ${visible ? 'reveal--visible' : ''}`}>
        <span className="section__label">Contact</span>
        <h2 className="section__title">Let’s build something solid</h2>
        <p className="section__lede">
          Reach out for collaborations, opportunities, or a thoughtful conversation about ML and backend
          engineering.
        </p>
      </div>

      <div className="contact__grid">
        <div className={`glass contact__panel reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: '0.08s' }}>
          <p className="contact__intro">Prefer email or social—both work.</p>
          <ul className="contact__channels">
            <li>
              <span className="contact__k">Email</span>
              <a href={`mailto:${site.email}`} className="contact__a">
                {site.email}
              </a>
            </li>
            <li>
              <span className="contact__k">Phone</span>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="contact__a">
                {site.phone}
              </a>
            </li>
            <li>
              <span className="contact__k">LinkedIn</span>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact__a">
                linkedin.com/in/ishan-vaidya22
              </a>
            </li>
            <li>
              <span className="contact__k">GitHub</span>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="contact__a">
                github.com/ishann-vaidya
              </a>
            </li>
          </ul>
        </div>

        <form
          className={`glass contact__form reveal ${visible ? 'reveal--visible' : ''}`}
          style={{ transitionDelay: '0.14s' }}
          onSubmit={onSubmit}
          noValidate
        >
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="What would you like to discuss?" />
          </div>
          <button type="submit" className="btn btn--primary contact__submit">
            Send message
          </button>
          {sent ? <p className="contact__note">Your mail client should open—adjust the draft if needed.</p> : null}
        </form>
      </div>
    </section>
  )
}
