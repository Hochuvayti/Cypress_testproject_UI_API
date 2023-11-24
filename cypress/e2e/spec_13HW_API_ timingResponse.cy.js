describe('httpbin tests', () => {
    it('response code should be 200', () => {  
        const request = {
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Mykola",
                "job": "Teacher"
                }
         };
    
    cy.request(request).then(response => {
    
        assert.equal(201, response.status);
    
        assert.equal("Mykola", response.body.name);
    
        assert.isTrue(response.duration <= 200);
        // виставляємо час для перевірки
    })
    })
    })