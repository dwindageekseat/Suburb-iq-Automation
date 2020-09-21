var agentsFormFirstName = 'John' // first name on agent form
var agentsFormLastName =  'Cena' // Last name on agent form
var agentsFormEmail = 'dwinda.yudantoro@gmaiol.com' //email on agent form
var agentsFormPhone = '036123245' //phone on agent form
var agentsFormAgency= 'agen akua' //agency on agent form

context('Footer menu', () => {
	beforeEach(() => {
	})




    it("Our partner test case",() =>
		{
            cy.visit("https://dev.suburbiq.com.au/")
        })

    /*            //clicking our partners
            cy.get(':nth-child(1) > p > .tve-froala').click()
            cy.log('Clicking our partner...')
        })
    it("Agents test case",() =>
		{
                //clicking agents
            cy.get(':nth-child(1) > .tcb-col > :nth-child(2) > p > .tve-froala').click()
                cy.log('clicking agent.... ')
            

                //filling form
            cy.log('filling form... ')
            cy.get('#input_17_9') //first name
                .type(agentsFormFirstName)
            cy.get('#input_17_10') //last name
                .type(agentsFormLastName)
            cy.get('#input_17_5') //email
                .type(agentsFormEmail)
            cy.get('#input_17_12')//phone
                .type(agentsFormPhone)
            cy.get('#input_17_13')
                .type(agentsFormAgency)
            cy.get('#input_17_14')
                .type('12344')
            cy.get('#gform_submit_button_17').click()//click submit button
         
        })*/
    
    it("Broker & lenders test case",() =>
        {
            cy.get(':nth-child(1) > .tcb-col > :nth-child(3) > p > .tve-froala').click() //clicking link

        })

})