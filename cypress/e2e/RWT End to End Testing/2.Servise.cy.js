describe("Newsletter subscribe form",()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    //Happy Path
    it("allows users to subscribe to the emails list",()=>{
        // cy.getByData("email-input").type("tom@aol.com")
        cy.get('[data-test="email-input"]').type("tom@aol.com")
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="success-message"]').should('exist').contains('tom@aol.com')

    })

    //Happy Path
    it("To Verify user should not allowed to get the email subscribe with invalid email data",()=>{

        cy.getByData("email-input").type("tom@aol@#%$%.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should('not.exist') 
    })
    //Unhappy Path
    it("To Verify user should not able to subscribe with the same email id twice",()=>{

        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message")
        .should('exist')
        .contains('already exists. Please use a different email address.')
        cy.screenshot()
    })


})