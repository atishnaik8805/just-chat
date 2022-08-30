const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // ✅ THE CORRECT WAY
  env: {
    FOO: 'bar',
    DEBUG: 'cypress:cli,cypress:server:specs npx cypress run --spec \'cypress/integration/examples/*'
  },
  e2e: {
    baseUrl: 'http://127.0.0.1:4200',
    supportFile: false,
  }
})