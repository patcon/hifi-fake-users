// patcon's space
const config = {
  HIFI_SPACE: process.env.HIFI_SPACE || 'DfFq8zih057Z3qe3',
  HIFI_X_POS: process.env.HIFI_X_POS || '38.63',
  HIFI_Y_POS: process.env.HIFI_Y_POS || '24.56',
  HIFI_ORIENTATION: process.env.HIFI_ORIENTATION || '4.71',
  MINUTES: parseInt(process.env.MINUTES, 10) || 1,
}

it('log into HiFi space as DJ', function() {
  cy.visit(`/${config.HIFI_SPACE}/?x=${config.HIFI_X_POS}&y=${config.HIFI_Y_POS}&o=${config.HIFI_ORIENTATION}`)
  cy.get('.screen1__play').click()
  cy.get('.allowScreen__askForPermissionButton *').first().click()
  cy.get('.chooseIOScreen__nextButton').click()
  cy.get('.profileScreen__readyButton').click()
  cy.wait(config.MINUTES * 60 * 1000)
})
