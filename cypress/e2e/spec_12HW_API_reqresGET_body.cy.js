
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

    debugger;  
// Це для більш гнучкої роботи з запитом, можно робити зміни в реальному часі і бачити правильні відповіді, для цього консоль Сypress повинна бути відкрита

    console.log(response);

    assert.equal(201, response.status);

    assert.equal("Mykola", response.body.name);

    // cy.log(response);   
    // це ще один метод, який є вже в самому Cypress, так можна замінити строку вище console.log(response);  - це для відображення інформації про зміст в джейсоні якщо будемо дивитися в DevTools (Цю річ прописуємо в кінці, як зараз)
})
})
})