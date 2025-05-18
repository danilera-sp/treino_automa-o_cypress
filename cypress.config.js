const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://torre.multihomo.com.br/',
 //  baseUrl:'https://opensource-demo.orangehrmlive.com/',
    defaultCommandTimeout: 10000,
    video: true,        // Habilita a gravação de vídeos
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
