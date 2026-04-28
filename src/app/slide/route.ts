export const dynamic = 'force-static'

const slideHtml = String.raw`<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Acoru｜北海道中小企業向け AI活用 基盤整備パック</title>
  <style>
    :root {
      --navy: #0f2537;
      --navy-2: #16354d;
      --blue: #1d8fe3;
      --cyan: #20c7d9;
      --mint: #53d6b6;
      --green: #20b486;
      --cream: #f7f4ed;
      --paper: #fffdf8;
      --ink: #15202b;
      --muted: #64748b;
      --line: rgba(15, 37, 55, .12);
      --shadow: 0 18px 48px rgba(15, 37, 55, .12);
      --radius: 24px;
      --radius-sm: 16px;
      --max: 1180px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: "Inter", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, system-ui, sans-serif;
      color: var(--ink);
      background: #e9eef3;
      line-height: 1.65;
    }

    a { color: inherit; text-decoration: none; }
    .wrap { width: min(var(--max), calc(100% - 56px)); margin: 0 auto; }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(18px);
      background: rgba(15, 37, 55, .92);
      border-bottom: 1px solid rgba(255,255,255,.12);
      color: #fff;
    }
    .topbar-inner {
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      letter-spacing: .04em;
      color: #fff;
    }
    .brand-mark {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--navy), var(--blue) 52%, var(--mint));
      display: grid;
      place-items: center;
      color: #fff;
      font-weight: 900;
      box-shadow: 0 10px 22px rgba(29, 143, 227, .25);
    }
    .nav {
      display: flex;
      gap: 10px;
      font-size: 13px;
      color: rgba(255,255,255,.72);
      white-space: nowrap;
    }
    .nav a {
      padding: 8px 10px;
      border-radius: 999px;
    }
    .nav a:hover { background: rgba(255,255,255,.10); color: #fff; }

    .hero {
      padding: 34px 0 22px;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      gap: 30px;
      align-items: center;
      min-height: calc(100vh - 128px);
      background:
        radial-gradient(circle at top left, rgba(32, 199, 217, .18), transparent 34rem),
        radial-gradient(circle at 88% 8%, rgba(83, 214, 182, .14), transparent 30rem),
        linear-gradient(180deg, #ffffff 0%, var(--paper) 100%);
      border: 1px solid rgba(15, 37, 55, .10);
      border-radius: 34px;
      box-shadow: 0 24px 70px rgba(15, 37, 55, .14);
      padding: clamp(28px, 4.5vw, 58px);
    }
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 13px;
      border-radius: 999px;
      color: var(--navy);
      background: rgba(83, 214, 182, .16);
      border: 1px solid rgba(83, 214, 182, .36);
      font-size: 13px;
      font-weight: 700;
    }
    .eyebrow::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 0 5px rgba(32, 180, 134, .14);
    }
    h1 {
      margin: 24px 0 20px;
      font-size: clamp(36px, 5.2vw, 68px);
      line-height: 1.05;
      letter-spacing: -.055em;
      color: var(--navy);
    }
    h1 .grad {
      background: linear-gradient(90deg, var(--blue), var(--green));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .lead {
      font-size: clamp(17px, 2vw, 22px);
      color: #334155;
      margin: 0 0 28px;
      max-width: 780px;
      font-weight: 500;
    }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 48px;
      padding: 12px 18px;
      border-radius: 999px;
      border: 1px solid transparent;
      font-weight: 800;
      font-size: 14px;
    }
    .btn.primary { background: var(--navy); color: #fff; box-shadow: 0 14px 30px rgba(15, 37, 55, .22); }
    .btn.secondary { background: #fff; color: var(--navy); border-color: var(--line); }

    .hero-card {
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 32px;
      box-shadow: var(--shadow);
      padding: 28px;
      position: relative;
      overflow: hidden;
    }
    .hero-card::after {
      content: "";
      position: absolute;
      inset: auto -40px -70px auto;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: rgba(32, 199, 217, .14);
    }
    .hero-card h2 { margin: 0 0 16px; color: var(--navy); font-size: 22px; line-height: 1.35; }
    .phrase {
      padding: 22px;
      border-radius: 22px;
      background: linear-gradient(135deg, rgba(15, 37, 55, .96), rgba(22, 53, 77, .96));
      color: #fff;
      font-size: 25px;
      font-weight: 900;
      line-height: 1.35;
      position: relative;
      z-index: 1;
    }
    .mini-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 18px; position: relative; z-index: 1; }
    .mini {
      display: grid;
      grid-template-columns: 34px 1fr;
      gap: 12px;
      align-items: start;
      padding: 14px;
      border-radius: 18px;
      background: #fff;
      border: 1px solid var(--line);
    }
    .mini b { display: block; color: var(--navy); line-height: 1.4; }
    .icon {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      color: #fff;
      background: linear-gradient(135deg, var(--blue), var(--mint));
      font-weight: 900;
    }

    section {
      padding: 22px 0;
      scroll-margin-top: 86px;
    }
    main > section:not(.hero):not(.final) .wrap {
      min-height: calc(100vh - 116px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--paper);
      border: 1px solid rgba(15, 37, 55, .10);
      border-radius: 34px;
      box-shadow: 0 22px 60px rgba(15, 37, 55, .12);
      padding: clamp(28px, 4vw, 52px);
    }
    .section-head {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      align-items: end;
      margin-bottom: 28px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(15,37,55,.10);
    }
    .section-head h2 {
      margin: 0;
      font-size: clamp(30px, 4.4vw, 52px);
      line-height: 1.12;
      color: var(--navy);
      letter-spacing: -.04em;
      max-width: 760px;
    }
    .section-head p { margin: 0; color: var(--muted); max-width: 440px; font-weight: 600; }

    .card {
      background: rgba(255,255,255,.92);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      box-shadow: 0 10px 26px rgba(15, 37, 55, .06);
      padding: 24px;
    }
    .card h3 { margin-top: 0; color: var(--navy); font-size: 22px; line-height: 1.35; }
    .card p { margin-bottom: 0; color: #475569; font-weight: 600; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; align-items: stretch; }
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; align-items: stretch; }
    .stat {
      padding: 30px;
      border-radius: var(--radius);
      background: linear-gradient(180deg, #fff, rgba(247, 244, 237, .72));
      border: 1px solid var(--line);
      min-height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .stat .num { font-size: 54px; line-height: 1; font-weight: 950; letter-spacing: -.05em; color: var(--navy); }
    .stat .label { margin-top: 12px; color: #475569; font-weight: 700; }
    .stat .note { margin-top: 8px; color: var(--muted); font-size: 13px; }

    .compare {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .compare-card {
      border-radius: var(--radius);
      padding: 24px;
      border: 1px solid var(--line);
      background: #fff;
    }
    .compare-card.ai {
      background: linear-gradient(135deg, rgba(29, 143, 227, .10), rgba(83, 214, 182, .16));
      border-color: rgba(29, 143, 227, .24);
    }
    .tag {
      display: inline-flex;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(15, 37, 55, .08);
      color: var(--navy);
      font-size: 12px;
      font-weight: 900;
      margin-bottom: 12px;
    }
    .compare-card h3 { margin: 0 0 12px; color: var(--navy); font-size: 24px; }
    ul.clean { padding: 0; margin: 0; list-style: none; display: grid; gap: 10px; }
    ul.clean li {
      position: relative;
      padding-left: 28px;
      color: #334155;
      font-weight: 600;
    }
    ul.clean li::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--green);
      font-weight: 950;
    }

    .flow {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      align-items: stretch;
    }
    .step {
      position: relative;
      padding: 24px;
      border-radius: var(--radius-sm);
      background: #fff;
      border: 1px solid var(--line);
      min-height: 230px;
      display: flex;
      flex-direction: column;
    }
    .step .no {
      width: 38px;
      height: 38px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      background: var(--navy);
      color: #fff;
      font-weight: 900;
      margin-bottom: 16px;
    }
    .step h3 { margin: 0 0 10px; color: var(--navy); font-size: 20px; line-height: 1.35; }
    .step p { margin: 0; color: var(--muted); font-weight: 600; font-size: 14px; }

    .warning {
      display: grid;
      grid-template-columns: 1.08fr .92fr;
      gap: 18px;
      align-items: stretch;
    }
    .dark {
      background: linear-gradient(135deg, var(--navy), var(--navy-2));
      color: #fff;
      border-radius: var(--radius);
      padding: 34px;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .dark h3 { margin: 0 0 16px; font-size: 28px; line-height: 1.3; }
    .dark p { margin: 0; color: rgba(255,255,255,.82); font-weight: 600; }
    .dark .highlight {
      margin-top: 18px;
      padding: 18px;
      border-radius: 18px;
      background: rgba(255,255,255,.1);
      color: #fff;
      font-weight: 900;
      font-size: 21px;
      line-height: 1.45;
    }

    .pill-list { display: flex; flex-wrap: wrap; gap: 10px; }
    .pill {
      padding: 10px 13px;
      border-radius: 999px;
      background: #fff;
      border: 1px solid var(--line);
      font-size: 14px;
      font-weight: 800;
      color: var(--navy);
    }

    .offer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }
    .offer-card {
      padding: 30px;
      border-radius: var(--radius);
      background: #fff;
      border: 1px solid var(--line);
      box-shadow: 0 10px 30px rgba(15, 37, 55, .07);
      position: relative;
      overflow: hidden;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .offer-card::before {
      content: attr(data-step);
      position: absolute;
      top: 16px;
      right: 18px;
      color: rgba(15, 37, 55, .08);
      font-size: 58px;
      font-weight: 950;
      letter-spacing: -.08em;
    }
    .offer-card h3 { margin: 0 0 10px; color: var(--navy); font-size: 26px; }
    .offer-card p { margin: 0 0 16px; color: var(--muted); font-weight: 600; }

    .talk {
      border-radius: 32px;
      background: linear-gradient(135deg, #ffffff, rgba(83, 214, 182, .14));
      border: 1px solid var(--line);
      padding: 32px;
      box-shadow: var(--shadow);
    }
    .talk blockquote {
      margin: 0;
      color: var(--navy);
      font-size: clamp(18px, 2.3vw, 25px);
      line-height: 1.75;
      font-weight: 800;
      letter-spacing: -.02em;
    }
    .talk .read {
      display: inline-flex;
      margin-bottom: 16px;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(32, 180, 134, .12);
      color: var(--green);
      font-weight: 900;
      font-size: 12px;
    }

    .signals {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    main > section .signals.wrap {
      display: grid;
      min-height: calc(100vh - 116px);
    }
    .callout {
      border-left: 5px solid var(--green);
      background: #fff;
      padding: 18px 20px;
      border-radius: 18px;
      font-weight: 800;
      color: var(--navy);
    }

    .final {
      padding: 22px 0 42px;
    }
    .final-box {
      min-height: calc(100vh - 116px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 36px;
      background: linear-gradient(135deg, var(--navy), #102d43 55%, #0c5b6a);
      color: #fff;
      padding: clamp(34px, 6vw, 68px);
      box-shadow: 0 24px 70px rgba(15, 37, 55, .24);
      overflow: hidden;
      position: relative;
    }
    .final-box::after {
      content: "";
      position: absolute;
      width: 420px;
      height: 420px;
      border-radius: 50%;
      right: -140px;
      top: -140px;
      background: radial-gradient(circle, rgba(83, 214, 182, .35), transparent 65%);
    }
    .final-box h2 {
      margin: 0 0 18px;
      position: relative;
      z-index: 1;
      font-size: clamp(30px, 5vw, 58px);
      line-height: 1.16;
      letter-spacing: -.045em;
    }
    .final-box p {
      margin: 0;
      position: relative;
      z-index: 1;
      max-width: 760px;
      color: rgba(255,255,255,.84);
      font-size: 18px;
      font-weight: 600;
    }
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 28px;
      position: relative;
      z-index: 1;
    }
    .summary-grid div {
      padding: 16px;
      border-radius: 18px;
      background: rgba(255,255,255,.1);
      border: 1px solid rgba(255,255,255,.13);
    }
    .summary-grid b { display: block; color: #fff; margin-bottom: 6px; }
    .summary-grid span { display: block; color: rgba(255,255,255,.76); font-size: 13px; line-height: 1.55; }

    .footnote {
      color: var(--muted);
      font-size: 12px;
      margin-top: 18px;
    }

    @media (max-width: 900px) {
      .nav { display: none; }
      .hero-grid, .grid-2, .compare, .warning, .signals { grid-template-columns: 1fr; }
      .grid-3, .offer { grid-template-columns: 1fr; }
      .flow { grid-template-columns: 1fr 1fr; }
      .summary-grid { grid-template-columns: 1fr 1fr; }
      .hero-grid,
      main > section:not(.hero):not(.final) .wrap,
      .final-box { min-height: auto; }
    }
    @media (max-width: 560px) {
      .wrap { width: min(100% - 24px, var(--max)); }
      .hero { padding-top: 42px; }
      .flow, .summary-grid { grid-template-columns: 1fr; }
      .section-head { display: block; }
      .section-head p { margin-top: 12px; }
      h1 { font-size: 40px; }
    }

    @media print {
      @page { size: 16in 9in; margin: 0; }
      .topbar, .hero-actions { display: none; }
      body { background: #fff; }
      .wrap { width: 100%; }
      .hero,
      section,
      .final { padding: 0; page-break-after: always; }
      .hero-grid,
      main > section:not(.hero):not(.final) .wrap,
      .final-box {
        width: 100vw;
        min-height: 100vh;
        border-radius: 0;
        box-shadow: none;
        border: 0;
      }
      .card, .hero-card, .offer-card, .talk, .final-box { box-shadow: none; }
    }
      body { background: #fff; }
      section, .hero, .final { page-break-inside: avoid; padding: 24px 0; }
      .card, .hero-card, .offer-card, .talk, .final-box { box-shadow: none; }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="wrap topbar-inner">
      <a class="brand" href="#top" aria-label="Acoru top">
        <span class="brand-mark">A</span>
        <span>Acoru</span>
      </a>
      <nav class="nav" aria-label="主要セクション">
        <a href="#message">概要</a>
        <a href="#compare">価値</a>
        <a href="#foundation">基盤整備</a>
        <a href="#offer">サービス</a>
        <a href="#partner">連携</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <span class="eyebrow">北海道中小企業向け AI活用支援</span>
          <h1>人を増やす前に、<br><span class="grad">AIで仕事を軽くする</span>。</h1>
          <p class="lead">Acoruは、北海道の中小企業が少人数でも事業を回せるように、AI活用の前提となる業務整理・データ基盤・セキュリティ設計を支援します。</p>
          <div class="hero-actions">
            <a class="btn primary" href="#offer">サービス内容を見る</a>
            <a class="btn secondary" href="#foundation">基盤整備の必要性を見る</a>
          </div>
        </div>
        <aside class="hero-card" id="message">
          <h2 id="message">サービスの考え方</h2>
          <div class="phrase">AIツールを入れる前に、AIが働ける会社の土台を整える。</div>
          <div class="mini-grid">
            <div class="mini"><span class="icon">1</span><div><b>採用の前に</b>今の業務量を減らす</div></div>
            <div class="mini"><span class="icon">2</span><div><b>AI活用の前に</b>情報・業務を整える</div></div>
            <div class="mini"><span class="icon">3</span><div><b>導入の前に</b>安全に使える設計をする</div></div>
          </div>
        </aside>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <h2>北海道では、業界を問わず人手不足。</h2>
          <p>採用だけでは埋まりにくい業務負担を、AI活用と業務基盤整備で軽くすることが重要になっています。</p>
        </div>
        <div class="grid-3">
          <div class="stat">
            <div class="num">58.3%</div>
            <div class="label">正社員が不足と感じる北海道内企業</div>
            <div class="note">業界特化ではなく、道内企業全体の経営課題として扱う。</div>
          </div>
          <div class="stat">
            <div class="num">38.5%</div>
            <div class="label">非正社員が不足と感じる北海道内企業</div>
            <div class="note">少人数で業務を回すための仕組みづくりが必要です。</div>
          </div>
          <div class="stat">
            <div class="num">AI</div>
            <div class="label">少人数で回すための省力化策</div>
            <div class="note">人を増やす前に、AIで減らせる仕事を減らす。</div>
          </div>
        </div>
        <p class="footnote">出典想定：帝国データバンク札幌支店「北海道・人手不足に対する企業の動向調査（2025年10月）」、北海道経済同友会「AI・ロボット活用による人手不足対応」</p>
      </div>
    </section>

    <section id="compare">
      <div class="wrap">
        <div class="section-head">
          <h2>採用だけに頼らず、AIで減らせる仕事を減らす。</h2>
          <p>AI活用は、人材採用と対立するものではありません。既存業務を軽くし、人が担うべき仕事に集中するための手段です。</p>
        </div>
        <div class="compare">
          <div class="compare-card">
            <span class="tag">人材採用</span>
            <h3>人が担うべき仕事に投資する</h3>
            <ul class="clean">
              <li>募集から定着まで時間がかかる</li>
              <li>固定費が増える</li>
              <li>ミスマッチ・離職リスクがある</li>
              <li>教育担当の負担が増える</li>
            </ul>
          </div>
          <div class="compare-card ai">
            <span class="tag">AI活用</span>
            <h3>定型業務・情報整理を軽くする</h3>
            <ul class="clean">
              <li>既存業務から小さく始めやすい</li>
              <li>対象業務を絞れば投資を抑えやすい</li>
              <li>試して効果を見ながら拡張できる</li>
              <li>書類・検索・日報・問合せに広く効く</li>
            </ul>
          </div>
        </div>
        <div class="callout" style="margin-top:18px;">AIで減らせる仕事を減らし、人が対応すべき業務へ採用・教育・配置のリソースを集中します。</div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <h2>AI活用までの進め方。</h2>
          <p>業務を分解し、情報を整え、AIで軽くできる部分から段階的に実装します。</p>
        </div>
        <div class="flow">
          <div class="step"><div class="no">1</div><h3>業務を棚卸し</h3><p>時間がかかる作業、属人化している作業を整理します。</p></div>
          <div class="step"><div class="no">2</div><h3>情報を整える</h3><p>顧客・案件・書類・履歴をAIが参照できる状態にします。</p></div>
          <div class="step"><div class="no">3</div><h3>安全に設計する</h3><p>権限、ログ、個人情報、機密情報の扱いを決めます。</p></div>
          <div class="step"><div class="no">4</div><h3>AI活用を始める</h3><p>書類作成、検索、日報、問い合わせ対応などから実装します。</p></div>
        </div>
      </div>
    </section>

    <section id="foundation">
      <div class="wrap warning">
        <div class="dark">
          <h3>AIは、会社の情報が整っていないと働けない。</h3>
          <p>紙・Excel・メール・担当者の頭の中に情報が散ると、AIは正しい情報を参照できない。優秀な新人でも、資料置き場・ルール・権限がなければ働けないのと同じ。</p>
          <div class="highlight">だから、AI導入の前に「基盤整備」が必要。</div>
        </div>
        <div class="card">
          <h3 style="margin-top:0;color:var(--navy);">よくある状態</h3>
          <ul class="clean">
            <li>顧客情報がExcel・名刺・メールに分散</li>
            <li>案件情報がチャット・紙・担当者の頭の中</li>
            <li>日報、写真、請求、契約が紐づいていない</li>
            <li>どれが最新版か分からない</li>
            <li>誰が見てよい情報か決まっていない</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <h2>Acoruの提供価値。</h2>
          <p>AIを実務で使い続けるには、ツール導入だけでなく、業務・情報・権限・運用まで整える必要があります。</p>
        </div>
        <div class="grid-2">
          <div class="card"><h3>業務整理</h3><p>AIに任せる仕事、人が判断する仕事、承認が必要な仕事を分ける。</p></div>
          <div class="card"><h3>データ整理</h3><p>顧客・案件・書類・履歴を、AIが参照できる状態に整える。</p></div>
          <div class="card"><h3>基盤構築</h3><p>DB、管理画面、検索、ファイル管理、ログを整備する。</p></div>
          <div class="card"><h3>安全設計</h3><p>権限、個人情報、機密情報、AIに見せてよい範囲を設計する。</p></div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <h2>地味だが、AI活用に不可欠な領域。</h2>
          <p>データ基盤・権限設計・セキュリティは表に見えにくい部分ですが、AI活用の品質と安全性を左右します。</p>
        </div>
        <div class="grid-3">
          <div class="card"><h3>大企業向け支援</h3><p>総合力は高い一方で、費用や導入プロセスが中小企業には重くなりがちです。</p></div>
          <div class="card"><h3>中小企業の現実</h3><p>紙・Excel・メール・個人管理が残り、AI活用以前の情報整理で止まりやすい状況があります。</p></div>
          <div class="card"><h3>Acoruの立ち位置</h3><p>中小企業向けに、業務・基盤・権限・セキュリティまで実装可能な形で整えます。</p></div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <h2>建設・運送は強い事例。対象は全業界。</h2>
          <p>建設・運送は、紙・写真・日報・現場情報が多く、人手不足も強く出るため、AI活用基盤の効果が分かりやすい事例領域です。</p>
        </div>
        <div class="grid-3">
          <div class="card"><h3>共通課題</h3><p>紙・Excel・写真・メールに情報が散る。これは業界を問わず発生する。</p></div>
          <div class="card"><h3>分かりやすい事例</h3><p>建設・運送は現場情報と人手不足が強く出るため、説明材料として強い。</p></div>
          <div class="card"><h3>本当の対象</h3><p>業界名ではなく、「人手不足 × 情報分散」の会社を探す。</p></div>
        </div>
        <div class="pill-list" style="margin-top:18px;">
          <span class="pill">製造</span><span class="pill">卸売・小売</span><span class="pill">観光・宿泊</span><span class="pill">介護・福祉</span><span class="pill">士業・事務所</span><span class="pill">不動産</span><span class="pill">教育</span><span class="pill">地域サービス業</span>
        </div>
      </div>
    </section>

    <section id="offer">
      <div class="wrap">
        <div class="section-head">
          <h2>AI活用 基盤整備パック。</h2>
          <p>診断、基盤整備、AI活用までを段階的に進めることで、中小企業でも無理なく導入できます。</p>
        </div>
        <div class="offer">
          <div class="offer-card" data-step="01">
            <h3>診断</h3>
            <p>入口商品</p>
            <ul class="clean"><li>業務棚卸し</li><li>AI活用候補</li><li>リスク洗い出し</li></ul>
          </div>
          <div class="offer-card" data-step="02">
            <h3>基盤整備</h3>
            <p>本命案件</p>
            <ul class="clean"><li>データ整理</li><li>DB・管理画面</li><li>権限・ログ設計</li></ul>
          </div>
          <div class="offer-card" data-step="03">
            <h3>AI活用</h3>
            <p>継続展開</p>
            <ul class="clean"><li>社内検索</li><li>書類・日報作成</li><li>問合せ対応支援</li></ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap signals">
        <div class="card">
          <h2 style="margin-top:0;color:var(--navy);">このような企業に適しています</h2>
          <ul class="clean">
            <li>紙・Excel・メールで業務情報が分散している</li>
            <li>報告書・日報・見積・請求の手作業が多い</li>
            <li>ベテランや特定担当者に業務が依存している</li>
            <li>社内資料や過去案件を探すのに時間がかかる</li>
            <li>AIを使いたいが、情報漏えいや誤回答が不安</li>
          </ul>
        </div>
        <div class="card">
          <h2 style="margin-top:0;color:var(--navy);">期待できる効果</h2>
          <ul class="clean">
            <li>定型的な事務作業の負担軽減</li>
            <li>社内情報の検索性向上</li>
            <li>属人化した業務の見える化</li>
            <li>AI活用時の権限・情報管理リスク低減</li>
            <li>採用・教育リソースを重要業務へ集中</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="partner">
      <div class="wrap">
        <div class="section-head">
          <h2>パートナー企業との連携。</h2>
          <p>採用支援、求人支援、人材紹介、地域企業支援と組み合わせることで、顧客企業への提供価値を広げます。</p>
        </div>
        <div class="flow">
          <div class="step"><div class="no">1</div><h3>課題把握</h3><p>人手不足、業務過多、情報管理の課題を整理します。</p></div>
          <div class="step"><div class="no">2</div><h3>診断</h3><p>Acoruが業務・データ・安全面の課題を可視化します。</p></div>
          <div class="step"><div class="no">3</div><h3>基盤整備</h3><p>AI活用に必要なデータ基盤・権限・運用設計を整えます。</p></div>
          <div class="step"><div class="no">4</div><h3>活用拡大</h3><p>AI活用と人材戦略を組み合わせ、少人数で回る体制を作ります。</p></div>
        </div>
        <div class="callout" style="margin-top:18px;">採用支援とAI基盤整備は競合しません。人材確保と業務省力化を組み合わせることで、顧客企業の経営課題により深く対応できます。</div>
      </div>
    </section>

    <section class="final">
      <div class="wrap final-box">
        <h2>採用の前に、AIで仕事を軽くする。<br>AIの前に、会社の情報と安全設計を整える。</h2>
        <p>Acoruは、北海道の中小企業が少人数でも事業を回せるように、AI活用の前提となる業務基盤・データ基盤・安全設計を整えます。</p>
        <div class="summary-grid">
          <div><b>対象</b><span>北海道の中小企業全般</span></div>
          <div><b>入口</b><span>人手不足・業務過多・属人化</span></div>
          <div><b>提供価値</b><span>AIが働ける基盤整備</span></div>
          <div><b>強い事例</b><span>建設・運送で磨いた実務型</span></div>
        </div>
      </div>
    </section>
  </main>
</body>
</html>`

export function GET() {
  return new Response(slideHtml, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  })
}
