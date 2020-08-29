const config = {
  // patcon's space
  HIFI_SPACE: process.env.HIFI_SPACE || '042W5u80uis3I5Jk',

  // Position of stage in default map.
  HIFI_X_POS: process.env.HIFI_X_POS || '38.63',
  HIFI_Y_POS: process.env.HIFI_Y_POS || '24.56',
  HIFI_ORIENTATION: process.env.HIFI_ORIENTATION || '4.71',

  MINUTES: process.env.MINUTES || '1',
}

it('log into HiFi space as DJ', function() {
  cy.visit(`/${config.HIFI_SPACE}/?x=${config.HIFI_X_POS}&y=${config.HIFI_Y_POS}&o=${config.HIFI_ORIENTATION}`)
  cy.get('.screen1__play').click()
  cy.get('.allowScreen__askForPermissionButton *').first().click()
  cy.get('.chooseIOScreen__nextButton').click()
  cy.get('.profileScreen__readyButton').click()
  cy.log(parseInt(process.env.MINUTES || '1', 10) * 60 * 1000)
  const msecWait = parseInt(config.MINUTES, 10) * 60 * 1000
  cy.wait(msecWait)
})
