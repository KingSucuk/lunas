# Lunas

This is a demo Next.js application for generating AI-based pet portraits. Users can upload photos, choose art styles, pay via Stripe, and receive generated images via email.

## Development

1. Copy `.env.local.example` to `.env.local` and fill in your API keys.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Avoid committing binary assets. If you need icons or images, reference them
   from a URL or add them to `.gitignore`.

## Notes
- Image generation and email sending are mocked in `app/api/generate/route.ts`.
- Results are stored in-memory and reset when the server restarts.

## Testing
Run linting and a production build:
```bash
npm run lint
npm run build
```
