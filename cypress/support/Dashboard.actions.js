Cypress.Commands.add('assertHomePage', () => {
  cy.visit('/')
  cy.get('div').contains('Welcome to takehome').should('be.visible')
})

Cypress.Commands.add('assertForgotPage', () => {
  cy.visit(Cypress.env("FORGOTURL"))
  cy.get('div').contains('Reset Password').should('be.visible')
})

Cypress.Commands.add('loginArea', () => {
  cy.get('[class="navbar-link fedora-navbar-link"]').click()
  cy.get('[id="email"]').should('be.visible')
  cy.get('[id="password"]').should('be.visible')
  cy.get('[data-testid="login-button"]').should('be.visible')
})

Cypress.Commands.add('loginSuccess', () => {
  cy.get('[id="email"]').type(Cypress.env("EMAIL"))
  cy.get('[id="password"]').type(Cypress.env("PASSWORD"))
  cy.get('[data-testid="login-button"]').click()
})

Cypress.Commands.add('wrongPass', () => {
  cy.get('[id="email"]').type(Cypress.env("EMAIL"))
  cy.get('[id="password"]').type(Cypress.env("WPASS"))
  cy.get('[data-testid="login-button"]').click()
})

Cypress.Commands.add('wrongEmail', () => {
  cy.get('[id="email"]').type(Cypress.env("WEMAIL"))
  cy.get('[id="password"]').type(Cypress.env("PASSWORD"))
  cy.get('[data-testid="login-button"]').click()
})

Cypress.Commands.add('singleWrongEmail', () => {
  cy.get('[id="user_email"]').type(Cypress.env("WEMAIL"))
  cy.get('[name="commit"]').click()
})

Cypress.Commands.add('sendForgotEmail', () => {
  cy.get('[id="user_email"]').type(Cypress.env("EMAIL"))
  cy.get('[name="commit"]').click()
})

Cypress.Commands.add('assertErrorMessage', () => {
  cy.get('div').contains('Your email or password is incorrect.').should('be.visible')
})

Cypress.Commands.add('assertLogin', () => {
  cy.get('li').contains('My Courses').should('be.visible')
})

Cypress.Commands.add('forgotPassword', () => {
  cy.get('div').contains('Forgot Password').click()
})

Cypress.Commands.add('assertForgotPassword', () => {
  cy.get('div').contains('Reset Password').should('be.visible')
})

Cypress.Commands.add('assertForgotPasswordSent', () => {
  cy.get('div').contains('You will receive an email with instructions on how to reset your password in a few minutes.').should('be.visible')
})

Cypress.Commands.add('assertForgotPasswordWrongMail', () => {
  cy.get('div').contains(`We couldn't find an account with that email address`).should('be.visible')
})

Cypress.Commands.add('logOut', () => {
  cy.get('[alt="takehome@test.com"]').click()
  cy.get('li').contains('Log Out').click()
})

Cypress.Commands.add('assertPublicArea', () => {
  cy.get('div').contains('Welcome to takehome').should('be.visible')
})
