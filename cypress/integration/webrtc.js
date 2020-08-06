it('uses webrtc', function() {
  cy.visit('https://appr.tc/?debug=loopback')
  cy.get('input#room-id-input').type('625438846')
  cy.get('button#join-button').click()
  cy.wait(10000)
})
