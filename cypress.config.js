const { defineConfig } = require('cypress')

// try running with "cypress run --browser chrome"
// can we get the browser name here?
module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
  },
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // no browser name
      console.log(config)
      // pass the browser name via Cypress env argument
      const browser = config.env.browser
      console.log('browser', browser)
      // change the the reporter output filename
      if (browser) {
        config.reporterOptions.mochaFile = `results/my-test-output-${browser}.xml`
      }
      // important: return the config file
      return config
    },
  },
})
