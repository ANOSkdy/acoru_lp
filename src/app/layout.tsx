import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://osasal.jp'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Osasal（旧：スマレポ）| AIとタグで、現場記録を自動化する',
    template: '%s | Osasal',
  },
  description:
    'OsasalはNFC/RFIDタグとAIを組み合わせ、打刻・作業記録・日報整理・報告業務を現場からつなぐBtoBプロダクトです。建設・保守・製造・多拠点運営の現場DXを支援します。',
  keywords: [
    'Osasal',
    'スマレポ',
    'NFC',
    'RFID',
    '現場記録',
    '日報',
    '作業記録',
    '現場DX',
    'AI',
    '打刻',
    '現場管理',
  ],
  applicationName: 'Osasal',
  authors: [{ name: 'Acoru inc.' }],
  creator: 'Acoru inc.',
  publisher: 'Acoru inc.',
  openGraph: {
    type: 'website',
    siteName: 'Osasal',
    title: 'Osasal（旧：スマレポ）| AIとタグで、現場記録を自動化する',
    description:
      'NFC/RFIDタグとAIで、現場の打刻・作業記録・日報整理・報告業務を一気通貫でつなぐ現場向けプロダクト。',
    url: siteUrl,
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osasal（旧：スマレポ）| AIとタグで、現場記録を自動化する',
    description:
      'NFC/RFIDタグとAIで、現場の打刻・作業記録・日報整理・報告業務を一気通貫でつなぐ現場向けプロダクト。',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Osasal',
      alternateName: ['Osasal（旧：スマレポ）', 'スマレポ'],
      url: siteUrl,
    },
    {
      '@type': 'Organization',
      name: 'Acoru inc.',
      url: siteUrl,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
