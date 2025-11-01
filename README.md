# Company Website (Next.js + Tailwind)

## Quick start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Brand it
1) Replace **public/logo.svg** with your logo file (keep the same name).
2) Set your colors in **app/globals.css** under the `:root` section (use RGB values).
3) Update company name and email in:
   - `components/Header.tsx` (text + logo alt)
   - `app/contact/page.tsx` (mailto address)
   - `app/layout.tsx` (SEO metadata and canonical domain)
4) Replace images in `/public` (hero.jpg, team.jpg) with your own.

## Deploy
- **Vercel:** Import this repo and deploy. Defaults work out of the box.
- **Netlify/Other:** Use `npm run build` then serve `.next` output per provider docs.

## Notes
- App Router (Next 14), TypeScript, Tailwind.
- Accessible, responsive, and SEO friendly base.
- Minimal JS for fast performance.

---
## Brand applied
- **Site:** BullDiving (https://bulldiving.com)
- **Primary color (RGB):** 9 83 110
- **Muted tint (RGB):** 218 229 233
- **Logo:** public/logo.png

Update colors anytime in `app/globals.css` under the `:root` tokens.
