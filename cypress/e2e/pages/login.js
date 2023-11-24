export class LoginPage {
    navigateToPage () {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    validateLoginTitle () {
        cy.get(".eckniwg2").should("be.visible");
        cy.get(".eckniwg2").should("have.text", "Log in");
    }

    validateInpupts () {
        cy.get(".next-v891b4").should("be.visible");
        cy.get(".next-11t95ij").should("be.visible");
    }   

    validateLogInButton () {
        cy.contains("Log in").should("be.visible");
    }   

    validatePasswordLink() {
        cy.get('[href="/account/password/restore"]').should("be.visible");
        cy.get('[href="/account/password/restore"]').should("have.text", "I can't remember the password");
    }     
}