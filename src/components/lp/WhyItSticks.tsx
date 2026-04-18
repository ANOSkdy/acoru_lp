const reasons = [
  {
    number: '01',
    title: '操作は「かざす」だけ',
    body: 'アプリを開いてタグに近づけるだけ。スマホ操作に不慣れなスタッフでも即日から使いはじめられます。マニュアルなしで現場に溶け込む設計です。',
  },
  {
    number: '02',
    title: 'モバイルファースト設計',
    body: 'スマートフォン完結。移動中・屋外・設備前でも操作でき、ネットワーク状況が不安定な環境にも対応しています。',
  },
  {
    number: '03',
    title: '現場フィットを最優先に',
    body: '現場チームのフィードバックをもとに機能を設計。「使ってもらえる」プロダクトになるよう、UXの改善を継続しています。',
  },
]

export function WhyItSticks() {
  return (
    <section className="py-24 bg-canvas-2">
      <div className="mx-auto max-w-container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] font-semibold text-accent mb-3 tracking-widest uppercase">
              Adoption
            </p>
            <h2 className="text-headline font-bold tracking-[-0.02em] text-ink mb-6">
              現場チームが
              <br />
              使い続けられる理由。
            </h2>
            <p className="text-body-lg text-ink-2 max-w-prose">
              どんなに優れたツールも、現場で使われなければ意味がありません。
              Osasalは「使ってもらえること」から逆算して設計されています。
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map(({ number, title, body }) => (
              <div
                key={number}
                className="flex gap-5 items-start p-6 rounded-2xl bg-canvas border border-stroke/50"
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-[12px] font-bold text-accent">
                  {number}
                </span>
                <div>
                  <h3 className="text-[1rem] font-bold text-ink mb-1.5">{title}</h3>
                  <p className="text-body-sm text-ink-2">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
