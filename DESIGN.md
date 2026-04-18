# DESIGN.md — Osasal LP Design & Content Contract

> This document is the single source of truth for the visual system, content strategy, and interaction rules of the Osasal landing page. All implementation decisions should reference this file.

---

## 1. Product & Brand Positioning

| Element | Value |
|---|---|
| Primary brand | `Osasal` |
| Transitional name | `Osasal（旧：スマレポ）` |
| Corporate attribution | `by Acoru inc.` |
| Product thesis | AI × NFC/RFID タグで現場の行動を記録・整理し、バックオフィスの報告業務までをつなぐインフラ |

**Positioning statement:**
Osasalは「現場記録ツール」ではなく、現場の行動を起点として管理・報告業務全体を再設計するBtoBプロダクトです。

---

## 2. Target Audience

**Primary:**
- 建設・設備・保守・点検・製造周辺・多拠点運営の現場責任者・管理者
- 現場の可視化・報告効率化を求める経営者・管理部門

**Secondary:**
- 現場スタッフ（操作者） — 低摩擦・直感的操作が必須

**Pain points to address:**
- 紙・口頭による記録の散逸
- Excel転記・集計の工数
- リアルタイムな現場把握の困難さ

---

## 3. Visual Direction

- **トーン:** Premium minimal。Apple的な清潔感を参考に、BtoB現場向けの具体性・信頼感を両立
- **ベース:** 白 `#ffffff` / ライトグレー `#f5f5f7` 交互セクション
- **余白:** 意図的・大胆。セクション上下パディング `96px (py-24)`
- **アクセント:** 単色ブルー `#0071e3` のみ。グラデーション最小限
- **写真・イラスト:** 製品UI参照モックアップ（CSS/SVGベース）。実スクリーンショット追加時は高精細なもののみ

---

## 4. Content Strategy

セクション順序と各セクションが答えるビジネス上の問い:

1. **Hero** — 「このプロダクトは何をするのか？」
2. **Problem** — 「なぜ今のやり方では不十分か？」
3. **What is Osasal** — 「どうやって解決するのか？」
4. **Features** — 「具体的に何ができるのか？」
5. **Why it Sticks** — 「現場チームが続けて使えるのか？」
6. **Tech** — 「技術的に信頼できるか？」
7. **Use Cases** — 「自社の業態に合うか？」
8. **Rollout** — 「導入ハードルは高くないか？」
9. **Final CTA** — 「次に何をすべきか？」

---

## 5. Layout Rules

```
Container:  max-w-[1120px] mx-auto px-6
Section pad: py-24 (96px top/bottom)
Grid:        grid md:grid-cols-2 / grid md:grid-cols-3
Gap:         gap-5 (cards) / gap-6 (pillars) / gap-16 (2-col layout)
Prose width: max-w-[720px]
```

**Card pattern:** `rounded-2xl border border-stroke/50 p-7`
**Highlight card:** `rounded-2xl bg-canvas-2 p-7` (no border)

---

## 6. Typography

| Role | Class | Size |
|---|---|---|
| Display (Hero H1) | `text-display font-bold tracking-[-0.02em]` | clamp(2.5rem, 5vw, 4rem) |
| Headline (Section H2) | `text-headline font-bold tracking-[-0.02em]` | clamp(1.75rem, 3.5vw, 2.75rem) |
| Title (Card H3) | `text-title-lg font-bold` | 1.3125rem / 21px |
| Body large | `text-body-lg` | 1.0625rem / 17px, lh 1.75 |
| Body small | `text-body-sm` | 0.9375rem / 15px, lh 1.65 |
| Label/Tag | `text-[11px] font-semibold tracking-widest uppercase` | 11px |

**Japanese readability rules:**
- `line-height: 1.75` for body text (generous for CJK)
- システムフォントスタックを使用（Hiragino優先）
- 見出しは改行位置を意図的にコントロール（`<br />`）

---

## 7. Color Tokens

```
accent:      #0071e3   — CTA・アクセント要素のみ
accent-h:    #0077ed   — accentのhover状態
ink:         #1d1d1f   — プライマリテキスト・ダーク背景
ink-2:       #6e6e73   — セカンダリテキスト・body copy
ink-3:       #a1a1a6   — キャプション・フッターテキスト
canvas:      #ffffff   — ベース背景（白セクション）
canvas-2:    #f5f5f7   — ライトグレー背景（交互セクション）
canvas-3:    #e8e8ed   — 強調なしの要素背景
stroke:      #d2d2d7   — ボーダー（通常）
stroke-2:    #424245   — ボーダー（ダーク背景内）
```

**使用ルール:**
- アクセントカラーはCTAボタン・ラベルドット・ステップ番号に限定
- ダーク背景（`bg-ink`）はFinal CTAセクションのみ
- グラデーションは製品モックアップ内のAIカードのみ許容

---

## 8. Components

### Header
- Fixed sticky、スクロール後に `bg-white/90 backdrop-blur-md border-b` を付与
- Brand: `Osasal` (font-semibold) + `by Acoru inc.` (text-ink-3, small)
- Nav: 「資料を見る」(text link) + 「導入相談」(filled dark pill)

### Hero
- min-h-screen、2カラム（コピー左 / モックアップ右）
- Eyebrow label → H1 → subtext → micro flow → CTA 2本
- Primary CTA: `bg-accent` pill / Secondary: `border-stroke bg-white` pill
- モックアップ: CSS/SVGベースのフォンフレーム（aria-hidden）

### Section Headings
- Eyebrow: `text-[11px] font-semibold text-accent tracking-widest uppercase`
- H2: `text-headline font-bold tracking-[-0.02em] text-ink`

### Cards (Feature / Use Case)
- `rounded-2xl border border-stroke/60 bg-canvas p-7`
- hover: `border-ink/20 shadow-sm`

### Pillars (3-col, What is Osasal)
- `rounded-2xl bg-canvas border border-stroke/50 p-7`
- SVGアイコン → label → headline → body

### Steps (numbered)
- flex gap-5、番号 `w-9 h-9 rounded-full bg-accent/10 text-accent`

### CTA Buttons
```
Primary:   px-7 py-3 rounded-full bg-accent text-white hover:bg-accent-h
Secondary: px-7 py-3 rounded-full border border-stroke bg-white text-ink hover:border-ink-2
Dark-sec:  px-8 py-3.5 rounded-full border border-stroke-2 text-white hover:border-ink-2
```

### Tags/Badges
- `px-3 py-1 rounded-full bg-canvas-2 border border-stroke text-[12px] text-ink-2 font-medium`

---

## 9. Motion

- Scroll-triggered transitions: ヘッダーのみ (`transition-all duration-300`)
- ホバートランジション: `transition-colors` のみ（カード、ボタン）
- `prefers-reduced-motion: reduce` でアニメーション無効化（globals.css 実装済み）
- フェードイン等の派手な演出は採用しない

---

## 10. SEO & Content Naming Rules

| Context | Use |
|---|---|
| `<title>` / OG title | `Osasal（旧：スマレポ）\| ...` |
| Hero H1 | `Osasal` (旧名なし、視覚的インパクト重視) |
| Hero subtext (初出) | `Osasal（旧：スマレポ）` |
| Section見出し | `Osasal` のみ |
| Footer | `Osasal` + `by Acoru inc.` |
| JSON-LD alternateName | `["Osasal（旧：スマレポ）", "スマレポ"]` |
| Copyright | `Acoru inc.` |

**メタデータキーワード:** Osasal, スマレポ, NFC, RFID, 現場記録, 日報, 作業記録, 現場DX, AI, 打刻

---

## 11. Accessibility Rules

- **見出し階層:** h1 (Hero) → h2 (各セクション) → h3 (カード)。順序を守る
- **コントラスト:** ink (#1d1d1f) on white = 16.75:1 ✓ / ink-2 (#6e6e73) on white = 5.74:1 ✓
- **フォーカス状態:** `:focus-visible { outline: 2px solid #0071e3; outline-offset: 2px; }` (globals.css)
- **装飾SVG:** `aria-hidden="true"` 必須
- **ランドマーク:** `<main>`, `<header>`, `<footer>`, `<nav aria-label="...">` を適切に使用
- **リンクテキスト:** 「クリックはこちら」等の曖昧なテキスト禁止
- **モーション:** `prefers-reduced-motion` 対応必須

---

## 12. Acceptance Criteria

- [ ] `pnpm dev` が起動する
- [ ] `pnpm exec tsc --noEmit` が通る
- [ ] `pnpm lint` が通る
- [ ] `pnpm build` が通る
- [ ] 全11セクションがページに表示される
- [ ] モバイル（375px）・タブレット（768px）・デスクトップ（1280px）でレイアウト崩れなし
- [ ] Hero H1の視認性が高く、ファーストビューでプロダクト価値が伝わる
- [ ] CTA「デモを相談する」がmailtoリンクとして機能する
- [ ] JSON-LDが `<head>` に出力されている
- [ ] 見出し階層 h1→h2→h3 が正しい
- [ ] 装飾SVGに `aria-hidden="true"` が付与されている
- [ ] `:focus-visible` スタイルが機能する
- [ ] `prefers-reduced-motion` でアニメーション無効化される
- [ ] `Osasal（旧：スマレポ）` がmeta descriptionとHero subtextに含まれる
- [ ] ブランド階層: Osasal > Acoru inc. が一貫している
