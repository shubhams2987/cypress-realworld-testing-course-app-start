describe('UserJourney ',()=>{
   

    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })


    it("a user can find the course on home page and complete the lession",()=>{
        cy.getByData('course-0').find('a').contains('Get started').click()
        cy.clearCookies()
        cy.location('pathname').should('equal','/testing-your-first-application')
        cy.getByData("next-lesson-button").click()
        cy.location('pathname')
        .should('eq','/testing-your-first-application/app-install-and-overview')
        cy.getByData("challenge-answer-0").check()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname')
        .should('eq','/testing-your-first-application/installing-cypress-and-writing-our-first-test')
        cy.getByData("challenge-answer-0").check()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname')
        .should('eq','/testing-your-first-application/setting-up-data-before-each-test')
        cy.getByData("challenge-answer-0").click()
        cy.getByData('next-lesson-button').contains('Complete Course').click()
        cy.location("pathname").should("equal", "/")
        cy.getByData('hero-heading').should('exist')
        cy.log("Everything looks good for this app")



        //Aliases cy.get ('id).find('tr).as("rows")
        //cy.get('rows').click()
    })








})