const cases = [
  {
    industry: '建設・設備',
    scenario:
      '作業員の入退場管理と日報のデジタル化。協力会社との記録共有、安全確認の記録自動化に対応します。',
    tags: ['打刻', '日報', '安全管理'],
  },
  {
    industry: '保守・点検',
    scenario:
      'ルート点検の記録自動化と異常報告の即時連携。点検完了状況を管理者がリアルタイムで把握できます。',
    tags: ['点検記録', '異常報告', 'ルート管理'],
  },
  {
    industry: '工場・製造周辺業務',
    scenario:
      'ライン作業の進捗記録と設備稼働ログ、シフト別の作業報告を自動で集計します。',
    tags: ['進捗記録', '設備管理', 'シフト対応'],
  },
  {
    industry: '多拠点運営',
    scenario:
      '複数拠点の状況を一画面で管理。本部への即時報告と拠点間比較の自動集計を実現します。',
    tags: ['一元管理', '複数拠点', '本部連携'],
  },
]

export function UseCases() {
  return (
    <section className="py-24 bg-canvas-2">
      <div className="mx-auto max-w-container px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold text-accent mb-3 tracking-widest uppercase">
            Use Cases
          </p>
          <h2 className="text-headline font-bold tracking-[-0.02em] text-ink">
            幅広い現場業態で
            <br />
            活用されています。
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cases.map(({ industry, scenario, tags }) => (
            <div
              key={industry}
              className="rounded-2xl bg-canvas p-7 border border-stroke/50"
            >
              <h3 className="text-title-lg font-bold text-ink mb-3">{industry}</h3>
              <p className="text-body-sm text-ink-2 mb-5">{scenario}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-canvas-2 border border-stroke text-[12px] text-ink-2 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
