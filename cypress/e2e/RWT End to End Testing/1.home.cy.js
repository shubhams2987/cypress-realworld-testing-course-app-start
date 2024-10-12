const { expect } = require("chai")
//to run this repo at local server you need to run below command first 
//npm run dev

// if its throwing any error  with <a> run :  npx @next/codemod new-link .


describe('home page ', () => {
  
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })


  context('Hero Section ',()=>{

    it.skip('To verify the h1 contains the correct text with should ', () => {
    
      cy.get("[data-test='hero-heading']")
      .should('exist')
      .contains("Testing Next.js Applications with Cypress")
    })
  
    it('The feature on homepage is correct checking 1st course',() => {
      // cy.visit('http://localhost:3000') we are using beforeEach hook for all testso this is not required anymore
      cy.get("dt").eq(1).contains(" Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains(/Free and Open Source/i) // REGEX ou can also pass regular expressions into the contains method. So if you wanted to make a case insensitive comparison using regex, you could use
    
    
    })

  })
  //adding cooment here 

  context('Courses Section',()=>{

    it('Testing Your First Next JS Application',()=>{

      cy.getByData('course-0').find('a').contains('Get started').click()
      cy.location('pathname').should('equal','/testing-your-first-application')
      //alias of below
      // cy.location().should((loc)=>{
      //   expect(loc.href).to.include('/testing-your-first-application')
      // })

    })

    it('Testing your Testing Foundation',()=>{
      cy.getByData('course-1').find('a').contains('Get started').click()
      cy.location('pathname').should('equal','/testing-foundations')
    })

    it('Testing Your Cypress Fundamentals',()=>{
      cy.getByData('course-2').find('a').contains('Get started').click()
      cy.location('pathname').should('equal','/cypress-fundamentals')
    })

  })





})