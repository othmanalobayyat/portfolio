# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** site with two routes:

- `/` — main portfolio page (`app/page.tsx`)
- `/todo` — standalone product landing page for the Todo Productivity App (`app/todo/page.tsx`)

### Data layer

All portfolio content lives in `data/portfolio.ts` — projects, skills, and contact info are exported as plain TypeScript objects/arrays. To update project cards, skills, or contact links, edit only this file. The `app/todo/page.tsx` page has its own inline data constants (`features`, `techStack`, screenshot paths).

### Component structure

```
components/
  Navbar.tsx              # Fixed top nav, scroll-aware (client component)
  sections/
    Hero.tsx              # Full-screen landing with animated badge
    About.tsx
    Projects.tsx          # Reads from data/portfolio.ts
    Skills.tsx            # Reads from data/portfolio.ts
    Contact.tsx           # Reads from data/portfolio.ts
    Footer.tsx
```

The main page composes these sections with a `<Divider />` helper inline in `app/page.tsx`.

### Styling conventions

- Dark theme: base background `#0F1117`, card background `#13141F`, hover `#161820`
- Accent palette: indigo (`#6366f1` range), violet, emerald for status dots
- All layout uses `max-w-5xl mx-auto px-6`
- Utility helper: `lib/utils.ts` exports `cn()` (clsx + tailwind-merge)
- Custom animations (`animate-fade-up`, `.delay-*`) are defined in `app/globals.css` — not via Tailwind plugin
- `lucide-react` is the icon library used everywhere

### Static assets

- APK download served from `public/apks/todo.apk`
- App screenshots at `public/screenshots/todo/` (tasks, calendar, achievements)
