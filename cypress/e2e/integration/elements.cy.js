/// <reference types="cypress"> />

describe('Work with basic elements', () => {

    // before(() => {
    //     cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    // })

    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get(':nth-child(2) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

    it('Combobox', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('Especializacao')
            .should('have.value', 'especializacao')

        cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp')
            .should('have.value', '1graucomp')

        //TODO validar as opções do combo
        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8)

        cy.get('[data-test="dataEscolaridade"] option').then($arr => {
            const values = []

            $arr.each(function() {
                values.push(this.innerHTML)
            })

            expect(values).to.include.members(["Superior", "Mestrado"])
        })
    })

    it.only('Combo multiplo', () => {
        cy.get('[data-testid="dataEsportes"]').select(['natacao', 'Corrida', 'nada'])

        //TODO validar opções selecionadas do combo multiplo
        cy.get('[data-testid="dataEsportes"]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
            expect($el.val()).to.have.length(3)
        })

        cy.get('[data-testid="dataEsportes"]')
            .invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])
    })
})

// describe('Work with basic elements', () => {
//     before(() => {
//         cy.visit('https://www.wcaquino.me/cypress/frame.html')
//     })

//     it('externo', () => {

//     })
// })