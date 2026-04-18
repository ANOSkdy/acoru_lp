export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-stroke-2 py-12">
      <div className="mx-auto max-w-container px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div>
            <p className="text-base font-semibold text-white">Osasal</p>
            <p className="text-[12px] text-ink-3 mt-0.5">by Acoru inc.</p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="フッターナビゲーション">
            <a
              href="#contact"
              className="text-[13px] text-ink-3 hover:text-white transition-colors"
            >
              お問い合わせ
            </a>
            <a
              href="mailto:info@acoru.jp"
              className="text-[13px] text-ink-3 hover:text-white transition-colors"
            >
              プライバシーポリシー
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-stroke-2">
          <p className="text-[12px] text-ink-3">
            © {year} Acoru inc. All rights reserved.
          </p>
          <p className="text-[12px] text-ink-3 mt-1">
            Osasal（旧：スマレポ）は Acoru inc. が提供するプロダクトです。
          </p>
        </div>
      </div>
    </footer>
  )
}
