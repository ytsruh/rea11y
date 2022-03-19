//Then, we need to create a PostCSS config file as instructed, but there is a catch: we need to use the .cjs extension to declare it as a CommonJS module: SvelteKit / Vite needs it in that format to ingest it, at least for now! So let’s create postcss.config.cjs in our project root:

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
