/// <reference types="cypress" />

//it ('Hangar WorldWide page', () =>)(){
it ('Visit HWWpage', function(){
        cy.visit('https://www.hangarworldwide.com/');
})
it ('Verify button + test', () => {
    cy.get('.hww-openings > .hww-button> span').should('have.text', 'See Job Openings');
})

it ('Verify button - test', () => {
    cy.get('.hww-openings > .hww-button> span').should('have.text', 'Job Search');
})