const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',    
  },
  env:{
    url:'https://the-internet.herokuapp.com/'
  }
});
