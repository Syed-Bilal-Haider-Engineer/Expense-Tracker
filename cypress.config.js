const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl:'http://192.168.0.101:5173',
    defaultCommandTimeout: 10000, // Set timeout to 10 seconds
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
