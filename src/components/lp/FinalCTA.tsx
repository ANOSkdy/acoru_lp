export function FinalCTA() {
  return (
    <section id="contact" className="py-32 bg-ink">
      <div className="mx-auto max-w-container px-6 text-center">
        <p className="text-[11px] font-semibold text-ink-3 mb-5 tracking-widest uppercase">
          Get Started
        </p>
        <h2 className="text-display font-bold tracking-[-0.02em] text-white mb-6">
          現場記録を、
          <br />
          あたらしい業務基盤へ。
        </h2>
        <p className="text-body-lg text-ink-3 max-w-prose mx-auto mb-12">
          Osasalは、現場ごとのフィット感を重視した導入支援を提供しています。
          まずは現状のヒアリングからはじめましょう。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@acoru.jp?subject=Osasal%20デモ相談"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white text-body-sm font-medium hover:bg-accent-h transition-colors"
          >
            デモを相談する
          </a>
          <a
            href="mailto:info@acoru.jp?subject=Osasal%20お問い合わせ"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-stroke-2 text-white text-body-sm font-medium hover:border-ink-2 transition-colors"
          >
            お問い合わせ
          </a>
        </div>

        <p className="mt-10 text-[0.8125rem] text-ink-3">
          資料をご希望の方も、上記よりお気軽にご連絡ください。
        </p>
      </div>
    </section>
  )
}
