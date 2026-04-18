function PhoneMockup() {
  const records = [
    { time: '08:32', label: '巡回点検 A棟', badge: '完了', cls: 'bg-emerald-100 text-emerald-700' },
    { time: '09:14', label: '設備確認 B棟', badge: '作業中', cls: 'bg-blue-50 text-accent' },
  ] as const

  return (
    <div aria-hidden="true" className="relative flex justify-center">
      <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-y-75" />
      <div className="relative w-[272px] rounded-[2.75rem] bg-ink p-2 shadow-2xl ring-1 ring-white/5">
        <div className="rounded-[2.25rem] bg-white overflow-hidden">
          <div className="h-7 bg-ink flex items-center justify-center">
            <div className="w-20 h-[14px] rounded-full bg-[#2c2c2e]" />
          </div>
          <div className="bg-canvas-2">
            <div className="bg-white px-4 py-2.5 flex items-center justify-between border-b border-canvas-3">
              <span className="text-[13px] font-semibold text-ink">Osasal</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-ink-2">現場A</span>
              </div>
            </div>
            <div className="p-3 space-y-2.5">
              <div className="bg-white rounded-2xl p-4 text-center border border-canvas-3 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-2.5">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#0071e3" fillOpacity="0.75" />
                    <rect x="15" y="3" width="8" height="8" rx="1.5" fill="#0071e3" fillOpacity="0.75" />
                    <rect x="3" y="15" width="8" height="8" rx="1.5" fill="#0071e3" fillOpacity="0.75" />
                    <rect x="16" y="16" width="2.5" height="2.5" rx="0.5" fill="#0071e3" />
                    <rect x="20" y="16" width="2.5" height="2.5" rx="0.5" fill="#0071e3" />
                    <rect x="20" y="20" width="2.5" height="2.5" rx="0.5" fill="#0071e3" />
                    <rect x="16" y="20" width="2.5" height="2.5" rx="0.5" fill="#0071e3" />
                  </svg>
                </div>
                <p className="text-[12px] font-semibold text-ink">タグを読み取りました</p>
                <p className="text-[10px] text-ink-2 mt-0.5">現場A-03 ／ 山田 太郎 ／ 09:14</p>
              </div>

              <div className="space-y-1.5">
                {records.map((r) => (
                  <div
                    key={r.time}
                    className="flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-canvas-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-ink-3 w-8 shrink-0">{r.time}</span>
                      <span className="text-[11px] font-medium text-ink">{r.label}</span>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium shrink-0 ${r.cls}`}>
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-accent/15 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-3 h-3 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <p className="text-[9px] font-semibold text-accent">AI 日報サマリ</p>
                </div>
                <p className="text-[10px] text-ink leading-relaxed">
                  本日の作業は予定通り完了。特記事項なし。次回点検：金曜午前。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const flow = [
    { label: 'スマホをかざす', arrow: true },
    { label: '記録が残る', arrow: true },
    { label: 'AIが整理する', arrow: false },
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-canvas-2 overflow-hidden pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#1d1d1f 1px, transparent 1px), linear-gradient(90deg, #1d1d1f 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-container px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-3 text-ink-2 text-[11px] font-medium mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              AI × NFC / RFID × 現場ワークフロー
            </p>

            <h1 className="text-display font-bold tracking-[-0.02em] text-ink mb-6">
              AIとタグで、
              <br />
              現場の記録を
              <br />
              自動化する。
            </h1>

            <p className="text-body-lg text-ink-2 mb-8 max-w-prose">
              Osasal（旧：スマレポ）は、NFC / RFIDタグとAIを組み合わせ、
              現場の打刻・作業記録・日報整理・報告業務までをつなぐ現場向けプロダクトです。
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-10" aria-label="製品の流れ">
              {flow.map(({ label, arrow }) => (
                <span key={label} className="flex items-center gap-2">
                  <span className="text-[0.9375rem] font-semibold text-ink">{label}</span>
                  {arrow && (
                    <span className="text-stroke font-light" aria-hidden="true">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-accent text-white text-body-sm font-medium hover:bg-accent-h transition-colors"
              >
                デモを相談する
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-stroke bg-white text-ink text-body-sm font-medium hover:border-ink-2 transition-colors"
              >
                資料を見る
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
