const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="#6e6e73" strokeWidth="1.5" />
        <path d="M8 11h12M8 15h8" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: '紙と口頭で記録が散逸',
    body: '作業記録は紙やメモが中心。情報が現場に留まり、管理側にはなかなか届かない。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 6v8l4 4" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="9" stroke="#6e6e73" strokeWidth="1.5" />
      </svg>
    ),
    title: '入力・集計に時間がかかりすぎる',
    body: 'ExcelやPDFへの転記・集計が日常的に発生し、本来業務の時間が削られている。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M5 14h2m14 0h2M14 5v2m0 14v2M8.1 8.1l1.4 1.4m9 9 1.4 1.4M8.1 19.9l1.4-1.4m9-9 1.4-1.4"
          stroke="#6e6e73"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="4" stroke="#6e6e73" strokeWidth="1.5" />
      </svg>
    ),
    title: '現場の状況がリアルタイムにわからない',
    body: '進捗は電話や日報でしか把握できず、問題が起きても対応が後手になりやすい。',
  },
]

export function Problem() {
  return (
    <section className="py-24 bg-canvas">
      <div className="mx-auto max-w-container px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold text-accent mb-3 tracking-widest uppercase">
            Problem
          </p>
          <h2 className="text-headline font-bold tracking-[-0.02em] text-ink">
            現場の情報は、
            <br />
            今もバラバラだ。
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map(({ icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-canvas-2 p-7">
              <div className="mb-5">{icon}</div>
              <h3 className="text-title-lg font-semibold text-ink mb-2">{title}</h3>
              <p className="text-body-sm text-ink-2">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-body-lg text-ink-2 max-w-prose mx-auto">
          Osasalは、これらの課題を「タグ」と「AI」という二つの技術で根本から解決します。
        </p>
      </div>
    </section>
  )
}
