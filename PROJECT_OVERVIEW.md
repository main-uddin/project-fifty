# Project Fifty

## Overview
Project Fifty is a Next.js (App Router) sandbox focused on practicing React hooks, refs, custom UI components, and CSS layout techniques. It ships a simple shell layout (sidebar + navbar) and several small demo pages for experimenting with hooks, custom checkbox styling, refs/forwardRef patterns, and CSS masonry/grid layouts.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS (via PostCSS)
- ESLint

## App Structure
- `app/`
- `app/page.tsx`: Home page with demo hooks and buttons
- `app/checkbox/page.tsx`: Checkbox demo page
- `app/refs/page.tsx`: Refs/forwardRef/modal/dropdown demos
- `app/contextapi/page.tsx`: Placeholder Context API page
- `app/css/page.tsx`: CSS layout practice page
- `app/components/`: Shared demo components, hooks, and UI samples
- `app/globals.css`: Global styles and theme variables

## Routes & Pages
- `/` (Home): Uses custom hooks to demo counter, toggle, and a fetch button.
- `/checkbox`: Demonstrates native and custom checkbox UI.
- `/refs`: Demonstrates refs, forwardRef, outside click detection, modal, and dropdown components.
- `/contextapi`: Placeholder for Context API demos.
- `/css`: CSS layout practice (flex, columns, masonry/grid).

## Key Components & Hooks
- `app/components/hooks/useCounter.ts`: Counter hook with increment, decrement (non-negative), and reset.
- `app/components/hooks/useToggle.ts`: Boolean toggle hook with `toggle`, `on`, and `off`.
- `app/components/hooks/useFetch.ts`: Example async function that returns mocked data (currently logs a fetch promise).
- `app/components/context/index.tsx`: Theme context with localStorage persistence and light/dark toggle.
- `app/components/navbar/index.tsx`: Top navbar with theme toggle and sidebar toggle button.
- `app/components/sidebar/index.tsx`: Sidebar with links to demo pages.
- `app/components/refs/`: Assorted ref demos (forwardRef, modal, dropdown, outside click).
- `app/components/checkbox/`: Custom checkbox UI samples and CSS.
- `app/components/practiceCss/`: CSS layout demos and image masonry.

## Running Locally
From the project root:

```bash
npm run dev
```

Other scripts:
- `npm run build`: Production build
- `npm run start`: Run production server
- `npm run lint`: Lint the project

## Notes
- The home page `useFetch` usage is a placeholder and does not return real fetched data yet.
- The layout is wrapped in `ThemeProvider` and `ClientLayout` for theme toggling and a persistent sidebar/navbar.
