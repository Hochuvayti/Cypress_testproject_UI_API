         const body = {
        bodyKey: "bodyValue"
      };
      const request = {
          method: 'POST',
          url: 'http://httpbin.org/post',
          body,   
        //   тут замінюємо body = body - можно це змінити на скорочене: body,
          failOnStatusCode: false
      };
describe('httpbin tests', () => {
    it('example of api request', () => {      
      cy.request(request).then(response => {
          assert.equal(200, response.status);
        //   Якщо що, то і замість value пишемо "Mykola"
          assert.notStrictEqual(body, response.body.data);
      })
    })
    })