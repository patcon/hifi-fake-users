it('uses webrtc', function() {
  cy.visit('https://meet.jit.si/cypress-audio-test#config.prejoinPageEnabled=false')
  cy.wait(20000)
})
