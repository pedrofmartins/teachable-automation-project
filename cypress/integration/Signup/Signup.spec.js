When('I go to the sign up page', () => {
   cy.goToSignUpSection()
})

When('I go to the sign up page by the enroll button', () => {
   cy.goToSignUpSectionByEnroll()
})

When('I click on the log in button', () => {
   cy.goToLogInFromSignUpSection()
})

When('I fill the form', () => {
   cy.signUpFillForm()
})

When('I fill the form with an already registered email', () => {
   cy.signUpFillFormWithRegisteredEmail()
})

When('I fill the form with a not strong password', () => {
   cy.notStrongpass()
})

Then('I am able to see the alert: Password must be at least 6 characters', () => {
   cy.assertNotStrongPass()
})
  
Then('I can see an already registered email alert', () => {
   cy.assertAlreadyRegisteredEmail()
})
