# WhyFinder — notes for Claude Code

WhyFinder is a chat app that helps people notice patterns in their own lives, with a
journal and Scripture (YouVersion). Built with Next.js 15 (App Router), React 19 and
TypeScript. AI replies come from the Anthropic API. See README.md for the full product description.

## Commands
- `npm install`: install dependencies (run once, and again after package.json changes)
- `npm run dev`: run locally at http://localhost:3000
- `npm test`: must stay green before every commit
- `npm run typecheck`: TypeScript check, must pass
- `npm run gates`: release gates. **Red by design** until clinician/pastoral review. Don't "fix" these by editing the tests.
- `npm run build`: production build (what Vercel runs)

## Where things live
- `app/page.tsx`: the whole chat screen + journal panel (large, ~1,150 lines, one file)
- `app/layout.tsx`: page shell, fonts, `<title>`
- `app/globals.css`, `app/journal.css`: all styling
- `app/api/turn/route.ts`: the one server endpoint the chat calls
- `app/api/health/route.ts`: status check
- `app/filter-demo/`: demo page showing the safety filter
- `src/engine/`: conversation logic (`conversation.ts` is the core)
- `src/constraints/`: **safety layer**: output filter, crisis detection (`acuteSignal.ts`), support path, question gate
- `src/content/`: question bank, experiments, Scripture lookup
- `src/providers/`: AI model adapters (Anthropic, plus a Gloo adapter that is intentionally off)
- `src/config/reviewState.ts`: DEMO/BETA mode and the hard demo expiry date
- `tests/`: must pass. `gates/`: must fail until reviewed.

## Rules (do not break)
1. **Never weaken, bypass, or add an off-switch to anything in `src/constraints/`.** `filterSynthesis` must keep exactly two arguments (a test checks this). Constraint IDs (C-01…C-32) are product rules, not style notes.
2. Crisis/support wording is unreviewed. Don't rewrite it casually. Flag any change to it to the user.
3. Never commit `.env.local` or any API key. Never print key values.
4. Data currently lives only in the browser (`localStorage`). There is no database and no accounts yet. Adding them changes the privacy promises in README.md, so update those too.
5. No streaks, badges, points or progress bars (C-27).

## Working style
- Work on a feature branch, never directly on `main`.
- Make small changes; run `npm test` and `npm run typecheck` after each.
- Explain changes in plain language. The current owner is not the original author and is learning the codebase.
- When adding new UI, prefer new component files under `app/components/` rather than growing `app/page.tsx` further.
