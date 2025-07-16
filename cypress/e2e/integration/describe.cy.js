/// <reference types="cypress"> />

it.only('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('Should group more specifics tests...', () => {
        it.skip('A especific test...', () => {

        })
    })

    describe('Should group more specifics tests 2...', () => {
        it('A especific test 2...', () => {

        })
    })

    it.only('A internal test...', () => {

    })  
})