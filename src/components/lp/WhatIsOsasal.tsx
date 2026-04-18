const pillars = [
  {
    label: 'Tag',
    labelJa: 'タグ',
    headline: 'かざすだけで記録がはじまる',
    body: 'NFC / RFIDタグを現場の設備・入口・作業エリアに設置。スマホをかざした瞬間に場所・時刻・担当者が自動で記録されます。入力の手間がゼロ。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="10" height="10" rx="2" fill="#0071e3" fillOpacity="0.8" />
        <rect x="18" y="4" width="10" height="10" rx="2" fill="#0071e3" fillOpacity="0.8" />
        <rect x="4" y="18" width="10" height="10" rx="2" fill="#0071e3" fillOpacity="0.8" />
        <rect x="19" y="19" width="3" height="3" rx="0.5" fill="#0071e3" />
        <rect x="24" y="19" width="3" height="3" rx="0.5" fill="#0071e3" />
        <rect x="24" y="24" width="3" height="3" rx="0.5" fill="#0071e3" />
        <rect x="19" y="24" width="3" height="3" rx="0.5" fill="#0071e3" />
      </svg>
    ),
  },
  {
    label: 'AI',
    labelJa: 'AI',
    headline: '記録を読み取り、言葉にする',
    body: '蓄積されたデータをAIが解析。日報の下書き生成・異常パターン検出・作業サマリの自動作成をバックグラウンドで行います。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="#0071e3" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="16" cy="16" r="6" stroke="#0071e3" strokeWidth="1.5" strokeOpacity="0.75" />
        <circle cx="16" cy="16" r="2.5" fill="#0071e3" />
        <path d="M16 6V4M16 28v-2M6 16H4M28 16h-2" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    label: 'Workflow',
    labelJa: 'ワークフロー',
    headline: '現場と管理をひとつなぎに',
    body: '現場のアクションが即座に管理側へ連携。報告書の承認フロー・集計ダッシュボードまで、一気通貫でつながります。既存の業務フローを活かしながら導入できます。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="12" width="8" height="8" rx="2" fill="#0071e3" fillOpacity="0.7" />
        <rect x="20" y="4" width="8" height="8" rx="2" fill="#0071e3" fillOpacity="0.5" />
        <rect x="20" y="20" width="8" height="8" rx="2" fill="#0071e3" fillOpacity="0.5" />
        <path d="M12 16h4M16 16V8l4 0M16 16v8l4 0" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const flowSteps = ['タグにかざす', '記録される', 'AIが整理', '管理しやすくなる']

export function WhatIsOsasal() {
  return (
    <section className="py-24 bg-canvas-2">
      <div className="mx-auto max-w-container px-6">
        <div className="mb-16">
          <p className="text-[11px] font-semibold text-accent mb-3 tracking-widest uppercase">
            Solution
          </p>
          <h2 className="text-headline font-bold tracking-[-0.02em] text-ink mb-4">
            タグとAI、二つの技術が
            <br />
            現場をつなぐ。
          </h2>
          <p className="text-body-lg text-ink-2 max-w-prose">
            Osasalは単なる入力ツールではありません。現場の行動を起点として、
            バックオフィスの報告・集計・確認業務までを連結するインフラです。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map(({ label, labelJa, headline, body, icon }) => (
            <div
              key={label}
              className="rounded-2xl bg-canvas p-7 border border-stroke/50"
            >
              <div className="mb-5">{icon}</div>
              <p className="text-[11px] font-semibold text-accent tracking-widest uppercase mb-1">
                {label}
              </p>
              <h3 className="text-title-lg font-bold text-ink mb-1">{labelJa}</h3>
              <p className="text-[0.875rem] font-semibold text-ink-2 mb-3">{headline}</p>
              <p className="text-body-sm text-ink-2">{body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-canvas border border-stroke/50 p-8">
          <p className="text-[11px] font-semibold text-accent tracking-widest uppercase mb-6">
            How it works
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {flowSteps.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-canvas-2 border border-stroke/50">
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-[10px] font-bold text-accent shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[0.9375rem] font-semibold text-ink">{step}</span>
                </span>
                {i < flowSteps.length - 1 && (
                  <span className="text-stroke text-lg font-light hidden sm:inline" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
