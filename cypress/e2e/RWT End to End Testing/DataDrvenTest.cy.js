describe.skip("Data Driven Test ",()=>{

    it(" We are using Data Driven Test ",()=>{

        const users = [
            {
              username: "John",
              password: "password123",
            },
            {
              username: "Jane",
              password: "password123",
            },
          ]
          
          cy.get("username").type(users[0].username)
          cy.get("password").type(users[0].password)




    })




})

