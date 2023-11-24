import {LoginPage} from "../e2e/pages/login";

const loginPage = new LoginPage();

describe("Page object example", () => {
    it('Login page', () => {
              // visit page
        loginPage.navigateToPage();
              // check title
        loginPage.validateLoginTitle();
              // check inputs
      //   loginPage.validateInputs();
              // check button
        loginPage.validateLogInButton();
              // check link
        loginPage.validatePasswordLink();
    })
    })



// describe("Page object example", () => {
//     it("login page test", () => {
//       // visit page
//       cy.visit("https://www.edu.goit.global/account/login");
//       // check title
//       cy.get(".eckniwg2").should("be.visible");
//       cy.get(".eckniwg2").should("have.text", "Log in");
//       // check inputs
//       cy.get("#user_email").should("be.visible");
//       cy.get("#user_password").should("be.visible");
//       // check button
//       cy.contains("Log in").should("be.visible");
//       // check link
//       cy.get("[href='/account/password/restore']").should("be.visible");
//       cy.get("[href='/account/password/restore']").should("have.text", "I can't remember the password");
//     });
//   });
  