describe("Practice on Important methods ",()=>{

    it.skip("using its() ",()=>{

        /*
        Get a property's value on the previously yielded subject.
        .its() is a handy method when you want to get the property off of something. For example if you want to make an assertion against an array.

        */

        cy.wrap(["ram","sam","yu"]).its(2).should("eq",'yu')
        cy.log()

        /*
        Or maybe you want to get the property from an object and make an assertion.
        */
       cy.wrap({age:28,place:"pune"}).its("age").should('eq',28)

    })


    it.skip('Dynamic Dropdown',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        // cy.get('input[type="checkbox"]').check(['option2','option3'])
        // cy.get('input[type="checkbox"]').check()

        //static dropdowns

        cy.get('select').select('option1').should('have.value','option1')


        //dyanamic dropdown
        cy.get('#autocomplete').type('ind')
        
        cy.get(".ui-menu-item").each(($el,index,$list)=>{

            if($el.text()==="India"){
                $el.click()
            }

        })

    })


    it("select any value and click on that",()=>{

        cy.visit("https://www.google.com")
        window:alert;
        cy.get('.gLFyf').type("epam")

        cy.get('[class="erkvQe"]').find('li').contains('epam').click()

        // cy.get('[data-view-type="1"]').eq(1).contains("Epam").click()

       

    })


})