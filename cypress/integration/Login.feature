Feature: Login

@automated
Scenario: Login successfully
  Given I am at the public area
  When I go to the login page
  And I type my email and pass
  Then I am redirected to the restricted area

@automated
Scenario: Login with a wrong pass
  Given I am at the public area
  When I go to the login page
  And I type my email and a wrong pass
  Then I can see a error message

@automated
Scenario: Login with a wrong email
  Given I am at the public area
  When I go to the login page
  And I type a wrong email and my pass
  Then I can see a error message

@automated
Scenario: Forgot Password redirect
  Given I am at the public area
  When I go to the login page
  And I click on the forgot password button
  Then I am redirected to the forgot password section

@maintenance
Scenario: Forgot Password successfully
  Given I am at forgot password section
  When I type my email
  Then my password is changed

@maintenance
Scenario: Forgot Password - wrong email
  Given I am at forgot password section
  When I type a wrong email
  Then I can see a error message: We couldnt find an account with that email address

@automated
Scenario: Logout successfully
  Given I am at the restricted area
  When I click on the log out button
  Then I am redirected to the public area