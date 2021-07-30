Feature: Public Area

@automated
Scenario: Sign Up successfully
  Given I am at the public area
  When I go to the sign up page
  And I fill the form
  Then I am redirected to the restricted area

@automated
Scenario: Log in from Sign Up
  Given I am at the public area
  When I go to the sign up page
  And I click on the log in button
  And I type my email and pass
  Then I am redirected to the restricted area

@automated
Scenario: Enroll successfully
  Given I am at the public area
  When I go to the sign up page by the enroll button
  And I fill the form
  Then I am redirected to the restricted area

@automated
Scenario: Sign Up email already registered
  Given I am at the public area
  When I go to the sign up page
  And I fill the form with an already registered email
  Then I can see an already registered email alert

@automated
Scenario: Sign Up - password check
  Given I am at the public area
  When I go to the sign up page
  And I fill the form with a not strong password
  Then I am able to see the alert: Password must be at least 6 characters