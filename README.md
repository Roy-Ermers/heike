# heike

A collection of custom Home Assistant cards built with Vue 3 and Web Components.

## Components

- **HeathSlider**: A responsive slider control for entities (e.g., light brightness).

### Prerequisites

- [pnpm](https://pnpm.io/)
- Node.js (version ^22.18.0 || >=24.12.0)

### Available Scripts

- `pnpm dev`: Start the development server.
- `pnpm build`: Build the production library for Home Assistant.
- `pnpm type-check`: Run TypeScript type verification.
- `pnpm format`: Format the code using `oxfmt`.

## Adding New Cards

To add a new card:

1. Create a new `.vue` file in `src/`.
2. Wrap it with `defineHaCard`.
3. Import that file in `src/main.ts`

## Building for Home Assistant

Build the project to generate the distribution bundle:

```bash
pnpm build
```

Reference the generated files in `dist/` as resources in your Home Assistant Lovelace dashboard.

## License

This project is open-source.
