'use client'

import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-stroke/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-container px-6 h-14 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-ink leading-none">
            Osasal
          </span>
          <span className="text-[11px] text-ink-3 leading-none">by Acoru inc.</span>
        </div>

        <nav className="flex items-center gap-2" aria-label="メインナビゲーション">
          <a
            href="#contact"
            className="hidden sm:inline-block px-4 py-1.5 text-sm text-ink hover:text-accent transition-colors rounded-full"
          >
            資料を見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-1.5 rounded-full bg-ink text-white text-sm font-medium hover:bg-[#333] transition-colors"
          >
            導入相談
          </a>
        </nav>
      </div>
    </header>
  )
}
