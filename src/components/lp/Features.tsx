const features = [
  {
    title: '打刻・入退場記録',
    note: 'スマホをかざすだけ',
    body: 'タグへのスキャンが入退場・巡回の時刻を自動記録します。手作業ゼロで、勤怠管理や作業者の把握がリアルタイムに。',
  },
  {
    title: '作業記録の起点化',
    note: '後追い入力ゼロ',
    body: '「かざす」動作が作業開始の記録と紐づきます。種別・担当者・場所を自動でログ化し、後から整理する手間がなくなります。',
  },
  {
    title: '日報・報告支援',
    note: 'AIが文章を自動生成',
    body: '蓄積されたタグ記録をもとにAIが日報の下書きを生成。現場スタッフの文書作成負荷を大幅に削減します。',
  },
  {
    title: '集計・確認',
    note: '管理者向け確認画面付属',
    body: '管理者は専用画面から現場の進捗をリアルタイム確認。期間集計・エクスポートで、週次・月次の報告書作成も効率化。',
  },
  {
    title: '紙・Excel運用との共存',
    note: '既存業務を壊さない',
    body: 'Osasalはフルリプレースを前提としません。既存の帳票・Excel管理と並行稼働し、段階的に移行できる設計です。',
  },
]

export function Features() {
  return (
    <section className="py-24 bg-canvas">
      <div className="mx-auto max-w-container px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold text-accent mb-3 tracking-widest uppercase">
            Features
          </p>
          <h2 className="text-headline font-bold tracking-[-0.02em] text-ink">
            現場業務の全工程を、
            <br />
            ひとつのプロダクトでカバーする。
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ title, note, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-stroke/60 bg-canvas p-7 hover:border-ink/20 hover:shadow-sm transition-all"
            >
              <p className="inline-block px-2.5 py-1 rounded-full bg-accent/8 text-accent text-[11px] font-semibold mb-4">
                {note}
              </p>
              <h3 className="text-title-lg font-bold text-ink mb-3">{title}</h3>
              <p className="text-body-sm text-ink-2">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
