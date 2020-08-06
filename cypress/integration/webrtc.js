it('uses webrtc', function() {
  cy.visit('https://meet.jit.si/625438846')
  cy.contains('div', 'Join meeting').click()
  cy.wait(10000)
})
