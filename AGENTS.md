# Agent Instructions for minimalist-portfolio

This document provides essential guidelines for AI agents working in this repository.

## Project Overview
This is an Astro-based minimalist portfolio project. It uses TypeScript, follows strict typing, and serves as a static site.

## Build, Lint, and Test Commands

*   **Build Project**: `npm run build` (or `pnpm run build`)
    *   This runs `astro check` (for type checking) followed by `astro build`.
*   **Development Server**: `npm run dev` (or `pnpm run dev`)
*   **Run Astro Commands**: `npm run astro -- [command]`
    *   Example: `npm run astro -- --help`

### Note on Testing
This project currently lacks a dedicated test framework like Vitest or Jest. If you need to verify logic, create a small utility file or a temporary test file and execute it directly via `tsx` or `node`.

## Code Style & Conventions

### Language & Typing
*   **Language**: TypeScript (strict mode enabled via `astro/tsconfigs/strict`).
*   **Types**: Always define explicit types or interfaces for data structures. Use `zod` for runtime validation where appropriate.
*   **Path Aliases**: Utilize the following defined aliases:
    *   `@/*` -> `src/*`
    *   `@cv` -> `./src/utils/cvData.ts`

### Imports
*   Use absolute paths using the defined aliases.
*   Group imports: internal modules, then local files.
*   Prefer named imports.

### Formatting & Naming
*   **Formatting**: Follow standard JavaScript/TypeScript conventions (2 spaces for indentation).
*   **Naming**:
    *   Components/Classes: PascalCase
    *   Functions/Variables: camelCase
    *   Constants: UPPER_SNAKE_CASE

### Error Handling
*   Handle asynchronous operations gracefully using `try...catch` blocks.
*   Since this is a static site, prioritize compile-time error detection.

## Architecture Guidelines
*   **Components**: Keep components in `src/components/`.
*   **Utilities/Data**: Keep logic and data in `src/utils/` or relevant subdirectories.
*   **Pages**: Routes are defined in `src/pages/`.

## AI-Specific Directives
*   **Context Awareness**: Always verify `package.json` for dependencies before introducing new ones.
*   **Non-Destructive**: Avoid deleting or refactoring core project configuration without explicit user confirmation.
*   **Documentation**: Keep changes minimal, clean, and idiomatic.
*   **Safety**: Before running commands, verify they are safe. If in doubt, ask.

## Version Control
*   Ensure all new features follow the existing commit message patterns in the repository (if applicable).
*   Run `npm run build` before finalizing a set of changes to ensure the project remains in a buildable state.
