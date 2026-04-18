const stack = [
  {
    label: 'NFC / RFID',
    desc: 'ISO標準タグ対応。既製品タグを既存インフラに追加設置するだけで稼働します。専用ハードウェア不要。',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    dot: 'bg-accent',
  },
  {
    label: 'AI',
    desc: '記録の自動分析・日報下書き生成・異常パターン検出。蓄積データを業務価値に変換します。',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    dot: 'bg-purple-500',
  },
  {
    label: 'Cloud',
    desc: '現場からのデータをリアルタイム同期。管理者はブラウザからいつでも確認可能。インフラ管理不要。',
    bg: 'bg-canvas-2',
    border: 'border-stroke',
    dot: 'bg-ink-2',
  },
  {
    label: 'Workflow',
    desc: 'カスタマイズ可能な承認フロー・通知設計。現場ごとの運用に合わせて柔軟に調整できます。',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    dot: 'bg-emerald-500',
  },
]

export function TechSection() {
  return (
    <section className="py-24 bg-canvas">
      <div className="mx-auto max-w-container px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold text-accent mb-3 tracking-widest uppercase">
            Technology
          </p>
          <h2 className="text-headline font-bold tracking-[-0.02em] text-ink mb-4">
            技術は、業務を支えるために
            <br />
            存在する。
          </h2>
          <p className="text-body-lg text-ink-2 max-w-prose">
            Osasalの技術スタックは、導入のしやすさと現場での信頼性を両立するために選ばれています。
            技術の複雑さをプロダクトが吸収し、現場チームはシンプルな操作だけを担います。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stack.map(({ label, desc, bg, border, dot }) => (
            <div
              key={label}
              className={`rounded-2xl border p-6 ${bg} ${border}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${dot}`} aria-hidden="true" />
                <p className="text-[13px] font-bold text-ink tracking-tight">{label}</p>
              </div>
              <p className="text-body-sm text-ink-2">{desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[0.875rem] text-ink-3 text-center max-w-prose mx-auto">
          技術詳細については、お問い合わせまたはデモセッションにてご説明します。
        </p>
      </div>
    </section>
  )
}
