const request = {
    method: 'GET',
    url: 'http://httpbin.org/headers',
    headers:{
      "Cookie": "cookieName=cookieValue"
    //   тут можуть бути різні дані, наприклад "token": "value"
    },
    failOnStatusCode: false
};
describe('httpbin tests', () => {
it('example of api request', () => {      
cy.request(request).then(response => {
    assert.equal(200, response.status);
  //   Якщо що, то і замість value пишемо "Mykola"
assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
// response.requestHeaders.user-agent  пишемо як  response.requestHeaders['user-agent'])  бо маємо дефіз (можуть бути і інші спецсимволи) в назві, і буде помилка
})
})
})