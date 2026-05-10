# jp-services-website

Landing site built with Next.js App Router, TypeScript, Tailwind CSS v4, and React 19.

## Requirements

- Node.js 20.19 or newer
- npm 10 or newer

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Environment variables

The contact form server action and Meta Pixel integration require these variables:

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
NEXT_PUBLIC_PIXEL_ID=
```

Notes:

- `SMTP_SECURE` should be `true` or `false`
- `NEXT_PUBLIC_PIXEL_ID` is exposed to the browser, so it must use the `NEXT_PUBLIC_` prefix

## Development

1. Install dependencies with `npm install`
2. Configure the environment variables
3. Start the dev server with `npm run dev`
4. Open `http://localhost:3000`

## Build validation

For a production validation run:

```bash
npm run lint
npm run build
```

## Migration notes

- The project targets Next.js 16
- Linting runs through `eslint .` because `next lint` is no longer available in Next.js 16
- `next.config.ts` keeps the current `images.remotePatterns` setup for Flaticon-hosted remote icons
