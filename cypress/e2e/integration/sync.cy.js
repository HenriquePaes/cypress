/// <reference types="cypress"> />

describe('Cypress basic', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona!')
    }) 
    
    it('Uso do find', () => {
        // cy.get('#buttonList').click()
        cy.get('#buttonListDOM').click()

        cy.get('#Lista li')
            .find('span')
            .should('contain', 'Item 1')

        // cy.get('#Lista li')
        //     .find('span')
        //     .should('contain', 'Item 2')

        cy.get('#Lista li span')
            .should('contain', 'Item 2')

        
    })

    it('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout: 1000}).should('exist')
        // cy.get('#novoCampo').should('exist')

        cy.get('#buttonListDOM').click()
        // // cy.wait(5000)
        // cy.get('#Lista li span', {timeout: 30000})
        //     .should('contain', 'Item 2')

        cy.get('#Lista li span')
            .should('have.length', 1)

        cy.get('#Lista li span')
            .should('have.length', 2)
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').should($el => {
            // console.log($el)
            // .should('have.length', 1)
            expect($el).to.have.length(1)
            // cy.get('#buttonList')
        })
        // .and('eq', 2)
            // .and('not.have.id', 'buttonListDOM')
    })
})