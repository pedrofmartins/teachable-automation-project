Cypress.Commands.add('goToSignUpSection', () => {
    cy.get('[id="header-sign-up-btn"]').click()
    cy.get('div').contains('Sign Up').should('be.visible')
    cy.get('[id="user_name"]').should('be.visible')
    cy.get('[id="user_email"]').should('be.visible')
    cy.get('[id="password"]').should('be.visible')
    cy.get('[id="allow_marketing_emails"]').should('be.visible')
    cy.get('[name="commit"]').should('be.visible')
  })

  Cypress.Commands.add('goToSignUpSectionByEnroll', () => {
    cy.get('[class="btn-primary btn-hg text-center homepage-hero-enroll-btn"]').click()
    cy.get('div').contains('Sign Up').should('be.visible')
    cy.get('[id="user_name"]').should('be.visible')
    cy.get('[id="user_email"]').should('be.visible')
    cy.get('[id="password"]').should('be.visible')
    cy.get('[id="allow_marketing_emails"]').should('be.visible')
    cy.get('[name="commit"]').should('be.visible')
  })

  Cypress.Commands.add('goToLogInFromSignUpSection', () => {
    cy.get('div').contains('Login').click()
    cy.get('[id="email"]').should('be.visible')
    cy.get('[id="password"]').should('be.visible')
    cy.get('[data-testid="login-button"]').should('be.visible')
  })

  Cypress.Commands.add('signUpFillForm', () => {
    //faker data generator
    let name = cy.faker.name.findName()
    let email = cy.faker.internet.email()
    let password = cy.faker.internet.password()

    cy.get('[id="user_name"]').type(name)
    cy.get('[id="user_email"]').type(email)
    cy.get('[id="password"]').type(password)
    cy.get('[id="allow_marketing_emails"]').click()
    cy.get('[name="commit"]').click()
  })

  Cypress.Commands.add('notStrongpass', () => {
    //faker data generator
    let name = cy.faker.name.findName()
    let email = cy.faker.internet.email()

    cy.get('[id="user_name"]').type(name)
    cy.get('[id="user_email"]').type(email)
    cy.get('[id="password"]').type(Cypress.env("NSPASS"))
    cy.get('[id="allow_marketing_emails"]').click()
    cy.get('[name="commit"]').click()
  })

  Cypress.Commands.add('signUpFillFormWithRegisteredEmail', () => {
    //faker data generator
    let name = cy.faker.name.findName()
    let password = cy.faker.internet.password()

    cy.get('[id="user_name"]').type(name)
    cy.get('[id="user_email"]').type(Cypress.env("AREMAIL"))
    cy.get('[id="password"]').type(password)
    cy.get('[id="allow_marketing_emails"]').click()
    cy.get('[name="commit"]').click()
  })

  Cypress.Commands.add('assertAlreadyRegisteredEmail', () => {
    cy.get('div').contains('Email is already in use. Please log in to your account.').should('be.visible')
  })

  Cypress.Commands.add('assertNotStrongPass', () => {
    cy.get('div').contains('Password must be at least 6 characters').should('be.visible')
  })
  