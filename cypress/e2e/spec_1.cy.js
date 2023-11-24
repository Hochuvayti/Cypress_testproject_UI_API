describe('Наш перший блок тестів', () => {
  it('Тест для відвідування сторінки як покупець', () => {
    cy.visit('https://www.edu.goit.global/account/login')
    // cy.get('#user_email').type("user888@gmail.com")
    // cy.get('#user_password').type("1234567890")
    // cy.get('[type="submit"]').click()
    cy.signIn('user888@gmail.com','1234567890')
  })
  it('Тест для відвідування сторінки як менеджер', () => {
    cy.visit('https://www.edu.goit.global/account/login')
    // cy.get('#user_email').type("nadia.tsomko.98@gmail.com")
    // cy.get('#user_password').type("Nadia_Tsomko78")
    // cy.get('[type="submit"]').click()
    cy.signIn('nadia.tsomko.98@gmail.com','Nadia_Tsomko78')
  })
  it('Тест для відвідування сторінки як адміністратор', () => {
    cy.visit('https://www.edu.goit.global/account/login')
    // cy.get('#user_email').type("user888@gmail.com")
    // cy.get('#user_password').type("1234567890")
    // cy.get('[type="submit"]').click()
    cy.signIn('user888@gmail.com','1234567890')
  })
  it('Перевірка властивастей кнопки', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    cy.get('[type="submit"]').should('have.text', 'Log in');
    cy.get('[type="submit"]').should('have.css', 'background-color', 'rgb(255, 107, 10)')
  })
})