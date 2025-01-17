/// <reference types="Cypress" />

describe('Acessando o forms', function() {
  beforeEach(function (){
    cy.visit('./formularioBasicoDvs/formulario.html')   
  })

  it('verifica o título', function() {
    cy.title().should('be.equal', 'Cadastro')
  })
})

