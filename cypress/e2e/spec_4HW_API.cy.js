describe('api testing', () => {
    it('method get response code should be 200', () => {
      cy.request('https://httpbin.org/').then(response => {
        const status = response.status;
        assert.equal(200, status)
      }) 
    })
})