import type { Metadata } from 'next'
import { Header } from '@/components/lp/Header'
import { Hero } from '@/components/lp/Hero'
import { Problem } from '@/components/lp/Problem'
import { WhatIsOsasal } from '@/components/lp/WhatIsOsasal'
import { Features } from '@/components/lp/Features'
import { WhyItSticks } from '@/components/lp/WhyItSticks'
import { TechSection } from '@/components/lp/TechSection'
import { UseCases } from '@/components/lp/UseCases'
import { Rollout } from '@/components/lp/Rollout'
import { FinalCTA } from '@/components/lp/FinalCTA'
import { Footer } from '@/components/lp/Footer'


const osasalUrl = 'https://acoru-lp.vercel.app/osasal'

export const metadata: Metadata = {
  title: 'Osasal（旧：スマレポ）| AIとタグで、現場記録を自動化する',
  description:
    'OsasalはNFC/RFIDタグとAIを組み合わせ、打刻・作業記録・日報整理・報告業務を現場からつなぐBtoBプロダクトです。建設・保守・製造・多拠点運営の現場DXを支援します。',
  alternates: { canonical: osasalUrl },
  openGraph: {
    type: 'website',
    siteName: 'Osasal',
    title: 'Osasal（旧：スマレポ）| AIとタグで、現場記録を自動化する',
    description:
      'NFC/RFIDタグとAIで、現場の打刻・作業記録・日報整理・報告業務を一気通貫でつなぐ現場向けプロダクト。',
    url: osasalUrl,
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osasal（旧：スマレポ）| AIとタグで、現場記録を自動化する',
    description:
      'NFC/RFIDタグとAIで、現場の打刻・作業記録・日報整理・報告業務を一気通貫でつなぐ現場向けプロダクト。',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Osasal',
      alternateName: ['Osasal（旧：スマレポ）', 'スマレポ'],
      url: osasalUrl,
    },
    {
      '@type': 'Organization',
      name: 'Acoru inc.',
      url: osasalUrl,
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Osasal',
      alternateName: 'スマレポ',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'iOS, Android, Web',
      description:
        'NFC/RFIDタグとAIを組み合わせ、建設・保守・製造・多拠点運営の現場における打刻・作業記録・日報整理・報告業務を支援するBtoBプロダクト。',
      brand: {
        '@type': 'Brand',
        name: 'Acoru inc.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhatIsOsasal />
        <Features />
        <WhyItSticks />
        <TechSection />
        <UseCases />
        <Rollout />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
