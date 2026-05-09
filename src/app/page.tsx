import type { Metadata } from 'next'

const siteUrl = 'https://acoru-lp.vercel.app'
const pageUrl = `${siteUrl}/`
const description =
  '北海道の建設・設備・土木会社向け。紙の日報、LINEの現場写真、Excelの勤怠集計など、採用前に減らせる現場事務を30分無料で確認します。札幌近郊は訪問相談可。'
const contactHref =
  'mailto:info@acoru.jp?subject=30%E5%88%86%E7%84%A1%E6%96%99%EF%BD%9C%E6%8E%A1%E7%94%A8%E5%89%8D%E3%81%AE%E7%8F%BE%E5%A0%B4%E4%BA%8B%E5%8B%99%E5%89%8A%E6%B8%9B%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF'

export const metadata: Metadata = {
  title: '北海道の建設業向け現場事務削減｜日報・写真整理・勤怠集計を軽くする｜Acoru',
  description,
  keywords: [
    '北海道',
    '建設業',
    '現場事務',
    '日報',
    '写真整理',
    '勤怠集計',
    '採用前',
    'Acoru',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '人を増やす前に、仕事を減らす｜採用前の現場事務削減チェック',
    description,
    url: pageUrl,
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Acoru',
  },
  twitter: {
    card: 'summary_large_image',
    title: '人を増やす前に、仕事を減らす｜採用前の現場事務削減チェック',
    description,
  },
}

const heroCards = [
  ['紙の日報', '提出確認に時間がかかる'],
  ['LINEの写真', '請求前に探している'],
  ['Excelの勤怠', '毎月打ち直している'],
]

const checkItems = [
  '日報を紙やLINEで集めている',
  'LINEで送られた現場写真を後から探している',
  '勤怠・作業時間をExcelに打ち直している',
  '請求前に、作業内容を何度も確認している',
  '社長や事務員さんに確認作業が集中している',
  '現場ごとの情報が人の記憶に残っている',
  '人を採りたいが、なかなか採れない',
]

const workCards = [
  ['残す作業', ['現場の判断', '職人さんの確認', '社長・管理者の最終チェック']],
  ['減らす作業', ['写真探し', '日報の提出確認', 'Excelへの打ち直し', '電話での聞き直し']],
  ['仕組みにする作業', ['日報入力', '写真整理', '勤怠集計', '請求前の確認']],
]

const freeCheckItems = [
  ['日報', '紙・LINE・写真つき報告の集め方を確認'],
  ['写真', '現場別・日付別に探しやすくする方法を整理'],
  ['勤怠', 'Excelへの打ち直しや集計の手間を確認'],
  ['請求', '請求前に戻りがちな確認作業を洗い出し'],
  ['連絡', '社長・事務員さんに集中する聞き直しを整理'],
  ['採用', '人を増やす前に減らせる事務作業を確認'],
]

const smallStartItems = [
  '日報を軽くする',
  '写真整理を軽くする',
  '勤怠集計を軽くする',
  '請求前確認を軽くする',
  'AI・NFC・Web化',
]

const flowSteps = [
  'お問い合わせ',
  '30分ヒアリング',
  '今のやり方を確認',
  '減らせる作業を整理',
  '必要に応じて改善提案',
]

const faqs = [
  [
    'パソコンが苦手でも相談できますか？',
    'はい。紙の日報、LINEの写真、Excelなど、今のやり方を見せていただくところから一緒に整理します。',
  ],
  [
    '日報だけでも相談できますか？',
    'もちろんです。日報だけ、写真整理だけ、勤怠集計だけなど、負担が大きい作業に絞って相談できます。',
  ],
  [
    '今使っているExcelやLINEは残せますか？',
    '残せる前提で確認します。無理に新しいシステムへ置き換えるのではなく、今の運用を活かして減らせる作業を探します。',
  ],
  [
    '北海道内なら訪問できますか？',
    '札幌近郊は訪問相談が可能です。その他の地域も、まずはメールで状況をお知らせください。',
  ],
  [
    '採用しない方がよいという話ですか？',
    'いいえ。必要な採用は大切です。その前に、事務作業として減らせるものがないかを確認するための相談です。',
  ],
  [
    'AIやDXに詳しくなくても大丈夫ですか？',
    '大丈夫です。専門用語ではなく、日報・写真・勤怠・請求前確認など実際の作業に沿ってお話しします。',
  ],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Acoru inc.',
      url: siteUrl,
      email: 'info@acoru.jp',
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: '北海道の建設業向け現場事務削減｜日報・写真整理・勤怠集計を軽くする｜Acoru',
      description,
      inLanguage: 'ja-JP',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#service` },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: '採用前の現場事務削減チェック',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: '北海道',
      serviceType: '現場事務削減チェック',
      description:
        '北海道の建設・設備・土木会社向けに、紙の日報、LINEの現場写真、Excelの勤怠集計など採用前に減らせる現場事務を30分無料で確認します。',
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Acoru',
          item: pageUrl,
        },
      ],
    },
  ],
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-prose text-center">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#21bddb]">
        {eyebrow}
      </p>
      <h2 className="text-headline font-bold tracking-[-0.02em] text-black/80">{title}</h2>
      {body ? <p className="mt-5 text-body-lg text-black/60">{body}</p> : null}
    </div>
  )
}

function CtaButton({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  const className =
    variant === 'primary'
      ? 'bg-[#21bddb] text-white shadow-sm hover:bg-[#19aac6]'
      : 'border border-black/10 bg-white text-black/70 hover:border-[#21bddb]/60 hover:text-[#168fa8]'

  return (
    <a
      href={contactHref}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-body-sm font-semibold transition-colors ${className}`}
    >
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white pb-24 text-black/75 sm:pb-0">
        <section className="mx-auto grid min-h-screen max-w-container items-center gap-12 px-6 py-24 md:grid-cols-[1.08fr_0.92fr] md:py-28">
          <div>
            <p className="mb-6 inline-flex rounded-full bg-[#21bddb]/10 px-4 py-2 text-[12px] font-semibold text-[#168fa8]">
              北海道の建設・設備・土木会社向け
            </p>
            <h1 className="text-display font-bold tracking-[-0.03em] text-black/80">
              人を増やす前に、
              <br />
              仕事を減らす。
            </h1>
            <p className="mt-7 text-title-lg font-bold text-black/70">
              その採用、日報・写真整理・勤怠集計のためではありませんか？
            </p>
            <p className="mt-5 max-w-prose text-body-lg text-black/60">
              紙の日報、LINEの現場写真、Excelの勤怠。毎月くり返している「探す・聞く・打ち直す」作業を、30分無料で一緒に見直します。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton>30分無料チェックを申し込む</CtaButton>
              <CtaButton variant="secondary">メールで相談する</CtaButton>
            </div>
            <p className="mt-6 text-body-sm text-black/50">
              札幌近郊は訪問相談可 / 日報だけ・写真整理だけ・勤怠集計だけでも相談できます
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#f5f5f5] p-5 md:p-7" aria-label="現場事務の見直し対象">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#21bddb]">
                Before hiring check
              </p>
              <div className="mt-6 space-y-4">
                {heroCards.map(([title, body]) => (
                  <div key={title} className="rounded-2xl bg-[#f5f5f5] p-5">
                    <p className="text-title-lg font-bold text-black/80">{title}</p>
                    <p className="mt-2 text-body-sm text-black/55">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-full bg-[#21bddb] px-5 py-3 text-center text-body-sm font-semibold text-white">
                探す・聞く・打ち直す作業を減らす
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-24">
          <div className="mx-auto max-w-container px-6">
            <SectionHeading
              eyebrow="Problem"
              title="その採用、現場事務を埋めるためではありませんか？"
              body="必要な採用は大切です。ただ、採用の前に減らせる確認作業・転記作業・探す時間が残っていることもあります。"
            />
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-7">
                <h3 className="text-title-lg font-bold text-black/80">採用で埋めがちな作業</h3>
                <p className="mt-4 text-body-lg text-black/60">
                  日報の提出確認、写真の捜索、勤怠の転記、請求前の聞き直し。人を増やしても、同じ作業が毎月残る場合があります。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-7">
                <h3 className="text-title-lg font-bold text-black/80">先に見直せること</h3>
                <p className="mt-4 text-body-lg text-black/60">
                  紙・LINE・Excelをいきなり否定せず、誰が何を探し、どこで打ち直しているかを分けて、減らせる順番を決めます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-container px-6">
            <SectionHeading eyebrow="Checklist" title="こんな作業を、毎月くり返していませんか？" />
            <div className="grid gap-4 md:grid-cols-2">
              {checkItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-[#f5f5f5] p-5 text-body-lg text-black/65">
                  <span className="mt-1 h-5 w-5 rounded-full bg-[#21bddb]/15 text-center text-[13px] font-bold leading-5 text-[#168fa8]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-24">
          <div className="mx-auto max-w-container px-6">
            <SectionHeading
              eyebrow="Work split"
              title="人がやる仕事と、仕組みで減らせる仕事を分けます。"
              body="Acoruは、最初から新しいシステムを押しつけません。現場の判断は残し、事務の負担になっている繰り返し作業を分けて見直します。"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {workCards.map(([title, items]) => (
                <div key={title as string} className="rounded-2xl bg-white p-7">
                  <h3 className="text-title-lg font-bold text-black/80">{title}</h3>
                  <ul className="mt-5 space-y-3 text-body-sm text-black/60">
                    {(items as string[]).map((item) => (
                      <li key={item}>・{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-container px-6">
            <SectionHeading
              eyebrow="Free check"
              title="30分無料｜採用前の現場事務削減チェック"
              body="紙の日報、LINE、Excel、写真フォルダをそのまま見せてください。きれいに整理していなくても、今の状態から確認できます。"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {freeCheckItems.map(([title, body]) => (
                <div key={title} className="rounded-2xl bg-[#f5f5f5] p-6">
                  <p className="text-title-lg font-bold text-black/80">{title}</p>
                  <p className="mt-3 text-body-sm text-black/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-24">
          <div className="mx-auto max-w-container px-6">
            <SectionHeading
              eyebrow="Small start"
              title="全部をシステム化する必要はありません。"
              body="まずは負担が大きい作業をひとつ軽くします。必要な場合だけ、AI・NFC・Web化などの選択肢を組み合わせます。"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {smallStartItems.map((item) => (
                <div key={item} className="rounded-full bg-white px-5 py-3 text-body-sm font-semibold text-black/65">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-container px-6">
            <SectionHeading eyebrow="Flow" title="相談の流れ" />
            <div className="grid gap-4 md:grid-cols-5">
              {flowSteps.map((step, index) => (
                <div key={step} className="rounded-2xl bg-[#f5f5f5] p-5">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#21bddb]/15 text-sm font-bold text-[#168fa8]">
                    {index + 1}
                  </div>
                  <p className="text-body-sm font-semibold text-black/70">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-24">
          <div className="mx-auto max-w-container px-6">
            <SectionHeading eyebrow="FAQ" title="よくある質問" />
            <div className="mx-auto max-w-prose space-y-4">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-2xl bg-white p-6">
                  <summary className="cursor-pointer text-title-lg font-bold text-black/75">
                    {question}
                  </summary>
                  <p className="mt-4 text-body-sm text-black/60">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-container px-6 text-center">
            <h2 className="text-headline font-bold tracking-[-0.02em] text-black/80">
              人を増やす前に、減らせる仕事を確認しませんか？
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-body-lg text-black/60">
              30分無料で、日報・写真整理・勤怠集計・請求前確認のどこが軽くできるかを一緒に確認します。
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaButton>30分無料チェックを申し込む</CtaButton>
              <CtaButton variant="secondary">メールで相談する</CtaButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-white px-6 py-10 pb-28 sm:pb-10">
        <div className="mx-auto flex max-w-container flex-col gap-3 text-body-sm text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-black/70">Acoru inc.</p>
          <p>北海道の現場事務削減を、今のやり方から一緒に見直します。</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur sm:hidden">
        <a
          href={contactHref}
          className="flex w-full items-center justify-center rounded-full bg-[#21bddb] px-5 py-3 text-sm font-semibold text-white"
        >
          30分無料チェックを申し込む
        </a>
      </div>
    </>
  )
}
