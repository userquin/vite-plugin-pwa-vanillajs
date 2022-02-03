# Vite Plugin PWA TypeScript Example

Using [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa) with `TypeScript`.

This is a working example for https://github.com/antfu/vite-plugin-pwa/issues/207.

To test the `PWA`:
- `pnpm install`
- `pnpm run preview`: open `http://localhost:5000`, should show a prompt with `Ready to work offline`
- stop server and run `pnpm run preview` again, refresh the browser page, should show a prompt with `New content available, click on reload button to update` and a `Refresh Button`.
