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

export default function Home() {
  return (
    <>
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
