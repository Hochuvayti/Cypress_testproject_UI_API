  const request = {
      method: 'GET',
      url: 'http://httpbin.org/headers',
      headers:{
        "CustomHeader": "CustomValue"
        // Додаємо свої варіанти хедеров
      },
      failOnStatusCode: false
  };
describe('httpbin tests', () => {
it('example of api request', () => {      
  cy.request(request).then(response => {
      assert.equal(200, response.status);
    //   Якщо що, то і замість value пишемо "Mykola"
      assert.equal("CustomValue", response.requestHeaders.CustomHeader);
  })
})
})