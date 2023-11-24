describe('httpbin tests', () => {
    it('example of api request', () => {
      const request = {
          url: 'http://httpbin.org/get',
          qs: {
            "key": "value"
            // тут може бути наприклад будь яка інформація, яку ми хочемо достати, наприклад "userName": "Mykola"
          },
          failOnStatusCode: false
      };
      cy.request(request).then(response => {
          assert.equal("value", response.body.args.key);
        //   Якщо що, то і замість value пишемо "Mykola"
      })
    });
    })