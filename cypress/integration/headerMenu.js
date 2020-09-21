
context('SearchAndParsingArticleElement', () => {
	beforeEach(() => {
	})




it("posting on agora",() =>
		{
            cy.visit("https://dev.suburbiq.com.au/")
            cy.get('#menu-item-2272 > a > .tve-disabled-text-inner').click() // How it works
              cy.log('clicking how it works')
              cy.get('#menu-item-2270 > a > .tve-disabled-text-inner').click() // faq
                
            
                
            
              //clicking each FAQ
            cy.get(':nth-child(1) > .tve_faqI > .tve_faqB > .tve_toggle > .tcb-icon > path').click()
            cy.get(':nth-child(2) > .tve_faqI > .tve_faqB > .tve-toggle-text').click()
            cy.get(':nth-child(3) > .tve_faqI > .tve_faqB > .tve-toggle-text').click()
            cy.get(':nth-child(4) > .tve_faqI > .tve_faqB > .tve-toggle-text').click()
            cy.get(':nth-child(5) > .tve_faqI > .tve_faqB > .tve-toggle-text').click()
            cy.get(':nth-child(6) > .tve_faqI > .tve_faqB > .tve-toggle-text').click()
            
            

              
              
             
        })


})