const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // ✅ THE CORRECT WAY
  env: {
    FOO: 'bar'
  },
  e2e: {
    baseUrl: 'http://localhost:3030',
    supportFile: false,
  }
})