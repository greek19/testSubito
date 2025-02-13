import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa event listeners qui
    },
    baseUrl: "http://localhost:9090", 
  },
});
