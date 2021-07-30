// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './Dashboard.actions'
import './Signup.actions'
import './commands.js'

// Alternatively you can use CommonJS syntax:
// require('./commands')

/**
 * Declare this method like this if you need to handle the runnable error
 * Cypress.on('uncaught:exception', (err, runnable)
 * returning false will prevent cypress from failing the test
 */
Cypress.on('uncaught:exception', () => {
  return false
})

Cypress.Cookies.defaults({
  preserve: /^CognitoIdentity|^amplify|after-auth-location/
})

cy.faker = require('faker')