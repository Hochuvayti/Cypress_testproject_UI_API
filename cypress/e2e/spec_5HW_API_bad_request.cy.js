describe('api testing', () => {
    const request = {
        url:'http://httpbin.org/non-existing-url',
        failOnStatusCode: false
    }
    it('method get response code should be 200', () => {
      cy.request(request).then(response => {
        const status = response.status;
        assert.equal(200, status)
      }) 
    })
})