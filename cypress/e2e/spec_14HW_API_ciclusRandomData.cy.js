describe('httpbin tests', () => {
    it('response code should be 200', () => {  
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        for (let index = 0; index < 10; index++) {
            
            const randomId = getRandomInt(999);
            const request = {
                url: 'https://httpbin.org/headers',
                id: randomId
            };

            cy.request(request).then(respons => {
                assert.isTrue(respons.status == 200)
            })
        }
    })
    })