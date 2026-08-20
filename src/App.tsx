import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { GhostCursor } from './components/GhostCursor'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

type Theme = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const storedTheme = window.localStorage.getItem('portfolio-theme')
    return storedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const cursorColor = theme === 'light' ? '#6366F1' : '#B19EEF'

  return (
    <>
      <GhostCursor
        color={cursorColor}
        brightness={theme === 'light' ? 0.75 : 0.85}
        bloomStrength={0.15}
        bloomRadius={0.6}
        bloomThreshold={0.02}
        trailLength={24}
        inertia={0.4}
        grainIntensity={0.02}
        fadeDelayMs={200}
        fadeDurationMs={1200}
        mixBlendMode="screen"
        style={{ opacity: 0.55 }}
        zIndex={0}
      />
      <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <main className="app-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
