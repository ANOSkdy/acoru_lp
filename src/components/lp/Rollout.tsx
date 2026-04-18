const steps = [
  {
    step: '01',
    title: 'まず一現場から',
    desc: 'パイロット現場にタグを設置し、打刻・作業記録の試験運用を開始します。最短で数日で稼働可能です。',
  },
  {
    step: '02',
    title: '手応えを確かめながら拡大',
    desc: '現場スタッフのフィードバックをもとに、プロセスと対象拠点を順次広げていきます。',
  },
  {
    step: '03',
    title: 'AI活用フェーズへ',
    desc: 'データが蓄積されたら日報生成・集計分析の自動化を本格稼働。現場記録が経営インサイトに変わります。',
  },
]

export function Rollout() {
  return (
    <section className="py-24 bg-canvas">
      <div className="mx-auto max-w-container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] font-semibold text-accent mb-3 tracking-widest uppercase">
              Rollout
            </p>
            <h2 className="text-headline font-bold tracking-[-0.02em] text-ink mb-6">
              すべてを
              <br />
              入れ替える必要はない。
            </h2>
            <p className="text-body-lg text-ink-2 max-w-prose">
              Osasalは「一現場」「一プロセス」「一業務」からはじめられます。
              既存の運用を壊さず、現場の納得感を確認しながら段階的にデジタル化を進める設計です。
            </p>
          </div>

          <div className="space-y-4">
            {steps.map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex gap-5 items-start p-6 rounded-2xl border border-stroke/60"
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-[12px] font-bold text-accent">
                  {step}
                </span>
                <div>
                  <h3 className="text-[1rem] font-bold text-ink mb-1.5">{title}</h3>
                  <p className="text-body-sm text-ink-2">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
