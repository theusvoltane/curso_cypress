const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "47b1od",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true, 
    reporter: 'mochawesome',
    reporterOptions:{
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"}
  },
});
