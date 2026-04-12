import { useEffect, useState } from 'react'

/** Subtle vertical shift for a background layer based on scroll position. */
export function useHeroParallax(intensity = 0.06) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * intensity)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [intensity])

  return offset
}
