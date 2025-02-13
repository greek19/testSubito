// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:9090', 
//     supportFile: 'cypress/support/e2e.js', 
//     video: false, 
//     screenshotOnRunFailure: true,
//   },
// });

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa event listeners qui
    },
    baseUrl: "http://localhost:9090", 
  },
});
