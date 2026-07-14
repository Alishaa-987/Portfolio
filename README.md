# Alisha Fatima — Portfolio

A full-stack developer portfolio built with **React + Vite**.

## Features
- Responsive UI (TailwindCSS)
- Projects & articles pages
- Contact form connected to **Supabase**

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create a file at the project root named `.env`:

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_PUBLIC_KEY
```

### 3) Run locally
```bash
npm run dev
```

## Deploy
Build with:
```bash
npm run build
```
Then deploy the generated `dist/` folder to your hosting provider.
