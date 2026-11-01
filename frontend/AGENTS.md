# Frontend Project Map

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
  - Uses PostCSS configuration in `postcss.config.mjs`.
  - Verify the actual configuration before assuming a traditional `tailwind.config.ts` file exists.
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Folder Structure

- `src/app/`: Routes and pages.
  - `(main)/`: Landing and main marketing pages.
  - `auth/`: Login, registration, forgot-password, and password-reset pages.
  - `dashboard/`: Protected user area.

- `src/components/`: Shared components.
  - `ui/`: Reusable UI components, such as Button, Input, and ThemeSwitch.
  - `layout/`: Shared layout components, such as Header and Sidebar.

- `src/features/`: Feature-based modules containing domain-specific logic.
  - `auth/`: Authentication-related components, hooks, and services. Uses `components/`.
  - `dashboard/`: Dashboard-specific components and logic. Currently uses `components/`.

- `src/lib/`: Shared library configurations and utilities.
  - `axios.ts`: Client-side API client.
  - `axios.server.ts`: Server-side API client.

- `src/styles/`: Global styles and styling entry points.
  - `globals.css`: Global CSS and Tailwind CSS entry point.

## Conventions

- **Components**: Use functional React components with TypeScript.
- **Types**: Define TypeScript interfaces or types when appropriate.
- **Data Fetching**: Follow existing patterns using Axios, server-side data fetching, or Server Actions where appropriate.
- **Theme**: Uses custom class-based theme switching with the `.light` class on `document.body`.
- **Naming**:
  - React components: PascalCase.
  - Functions and variables: camelCase.
  - Follow the existing naming conventions for files and directories.

## Key Files

- `src/lib/axios.ts`: Client-side API client.
- `src/lib/axios.server.ts`: Server-side API client.
- `src/components/ui/ThemeSwitch.tsx`: Theme toggle logic.
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS 4.

## Development Rules

- Read this file before making changes to the frontend.
- Verify existing files, dependencies, and implementations before relying on assumptions.
- Preserve the current architecture and established coding patterns.
- Do not invent file paths, functions, dependencies, or configurations.
- Do not modify the Laravel backend when a task only requires frontend changes.
- Update this document when the project structure, dependencies, or conventions change.