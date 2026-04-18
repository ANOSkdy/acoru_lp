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

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
              >
                <source src="/hero_1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
