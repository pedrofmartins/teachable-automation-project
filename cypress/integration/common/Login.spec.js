Given('I am at the public area', () => {
  cy.assertHomePage()
})

Given('I am at forgot password section', () => {
  cy.assertForgotPage()
})

Given('I am at the restricted area', () => {
  cy.assertHomePage()
  cy.loginArea()
  cy.loginSuccess()
})

When('I go to the login page', () => {
  cy.loginArea()
})

When('I type my email and pass', () => {
  cy.loginSuccess()
})

When('I type my email and a wrong pass', () => {
  cy.wrongPass()
})

When('I type a wrong email and my pass', () => {
  cy.wrongEmail()
})

When('I click on the forgot password button', () => {
  cy.forgotPassword()
})

When('I type my email', () => {
  cy.sendForgotEmail()
})

When('I type a wrong email', () => {
  cy.singleWrongEmail()
})

When('I click on the log out button', () => {
  cy.logOut()
})

Then('my password is changed', () => {
  cy.assertForgotPasswordSent()
})

Then('I am redirected to the forgot password section', () => {
  cy.assertForgotPassword()
})
  
Then('I am redirected to the restricted area', () => {
  cy.assertLogin()
})

Then('I can see a error message', () => {
  cy.assertErrorMessage()
})

Then('I can see a error message: We couldnt find an account with that email address', () => {
  cy.assertForgotPasswordWrongMail()
})

Then('I am redirected to the public area', () => {
  cy.assertPublicArea()
})