const request = {
    method: 'GET',
    url: 'http://httpbin.org/headers',
    headers:{
      "user-agent": "My test user-agent"
    },
    failOnStatusCode: false
};
describe('httpbin tests', () => {
it('example of api request', () => {      
cy.request(request).then(response => {
    assert.equal(200, response.status);
  //   Якщо що, то і замість value пишемо "Mykola"
assert.equal("My test user-agent", response.requestHeaders['user-agent']);
// response.requestHeaders.user-agent  пишемо як  response.requestHeaders['user-agent'])  бо маємо дефіз (можуть бути і інші спецсимволи) в назві, і буде помилка
})
})
})