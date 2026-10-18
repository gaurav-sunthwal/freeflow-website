# FreeFlow website

The website and account API for [FreeFlow](https://github.com/gaurav-sunthwal/freeflow), a free and private
voice-typing app for Mac. Live at **https://freeflow-voice.vercel.app**.

## API

The FreeFlow app uses these endpoints for **optional** stats backup. They store aggregate stats only, never
dictated text or audio.

| Endpoint | What it does |
|---|---|
| `POST /api/auth/signup` | Create an account (`name`, `email`, `password`) |
| `POST /api/auth/login` | Sign in and get a token |
| `GET /api/me` | Profile plus backed-up stats |
| `PUT /api/stats` | Save stats; only allow-listed fields are stored |
| `DELETE /api/me` | Delete the account and its data |

Passwords are hashed with scrypt, and tokens are signed with HMAC-SHA256. Tables are created automatically on
first use.

## Development

```bash
cp .env.example .env.local   # then fill in DATABASE_URL (Neon) and AUTH_SECRET (openssl rand -base64 48)
npm install
npm run dev                  # http://localhost:3000
```

## Deployment

Every push to `main` deploys to Vercel automatically. Set `DATABASE_URL` and `AUTH_SECRET` in
Vercel → Project → Settings → Environment Variables. **Never commit them.**
