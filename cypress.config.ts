import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    supportFile: false,
    baseUrl: 'https://recruitment-project-vlayer.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
