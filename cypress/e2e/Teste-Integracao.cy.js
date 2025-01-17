/// <reference types="cypress" />

describe('Acessando o forms', function() {
  beforeEach(function (){
    cy.visit('./FormularioBasicoDvs/formulario.html')   
  })

  it('verifica o título', function() {
    cy.title().should('be.equal', 'Cadastro')
  })

  it('Verificar envio de formulario', () =>{
    cy.get('#nome').type('Ana Luiza')
    cy.get('#sobrenome').type('Dias')
    cy.get('#email').type('andreza@hotmail.com')

    cy.get('input[type="radio"][name="devweb"][value="backend"]').check()

    cy.get('#senioridade').select('Pleno')
    .should('be.visible', 'Pleno')

    cy.get('input[type="checkbox"][value="C#"]').check()
    //<input type="checkbox" id="tecnologia5" name="tecnologia5" value="C#">
    // cy.get('#tecnologia3').click()
    //cy.get('#tecnologia7').click()







  })
})

