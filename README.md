# The Bottled Mixologist — Netlify Ready (Vite + React + Tailwind)

**Build settings for Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

**Node version**
- Netlify sometimes defaults to older Node. This project includes `.nvmrc` (20) and `"engines": {"node": ">=18"}` in `package.json`. If needed, set an Environment Variable in Netlify: `NODE_VERSION=20`.

**Edit content**
- `/content/site.json` — site name, tagline, email, socials
- `/content/products.json` — products (paste your Stripe Payment Links)
- `/content/recipes.json` — recipe cards
