import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://acoru-lp.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Acoru｜北海道の現場事務削減支援',
    template: '%s',
  },
  description:
    'Acoru inc. は、北海道の建設・設備・土木会社向けに日報・写真整理・勤怠集計などの現場事務削減を支援します。',
  applicationName: 'Acoru',
  authors: [{ name: 'Acoru inc.' }],
  creator: 'Acoru inc.',
  publisher: 'Acoru inc.',
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  )
}
