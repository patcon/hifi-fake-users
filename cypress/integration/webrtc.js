it('uses webrtc', function() {
  cy.visit('https://meet.jit.si/625438846#config.prejoinPageEnabled=false')
  cy.wait(10000)
})
