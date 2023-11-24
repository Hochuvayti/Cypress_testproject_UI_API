describe('httpbin tests', () => {
  it('example of api request', () => {
    const request = {
        method: 'POST',
        url: 'http://httpbin.org/post',
        failOnStatusCode: false
    };
    cy.request(request).then(response => {
        assert.equal(200, response.status);
    })
  });
  })
