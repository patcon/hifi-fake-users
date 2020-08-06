it('log into HiFi space as DJ', function() {
  cy.visit('/DfFq8zih057Z3qe3/?x=38.63&y=24.56&o=4.71')
  cy.get('.screen1__play').click()
  cy.get('.allowScreen__askForPermissionButton *').first().click()
  cy.get('.chooseIOScreen__nextButton').click()
  cy.get('.profileScreen__readyButton').click()
  cy.wait(20000)
})
