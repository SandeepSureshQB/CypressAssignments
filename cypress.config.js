const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@cypress/browserify-preprocessor")
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor", browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/assignments/BDD/*.feature',
    testIsolation: false,
    supportFile: "cypress/support/e2e.js",
    env: {
      a1: "https://blazedemo.com/",
      a2: "https://jupiter.cloud.planittesting.com/",
      a3: "https://opensource-demo.orangehrmlive.com/",
      a4: "https://parabank.parasoft.com/",
      a5: "https://www.saucedemo.com/",
      a6: "https://www.google.com/flights",
      a7: "https://magento.softwaretestingboard.com/",
    },
  },

});
