import { useEffect, useState } from 'react'
import { site } from '../content/site'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

type Theme = 'dark' | 'light'

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a
          href="#top"
          className="site-header__brand"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="site-header__mark" aria-hidden />
          {site.name}
        </a>

        <div className="site-header__controls">
          <nav className={`site-header__nav ${open ? 'site-header__nav--open' : ''}`}>
            {nav.map((item) => (
              <button key={item.id} type="button" className="site-header__link" onClick={() => go(item.id)}>
                {item.label}
              </button>
            ))}

            <a
              className="site-header__resume btn btn--primary"
              href="https://drive.google.com/file/d/1JJVmHJgMRmp25RqFs2cUJMrKAaH0LsIT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="site-header__theme-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
