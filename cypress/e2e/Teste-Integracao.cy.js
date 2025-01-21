/// <reference types="cypress" />

// Inicia um bloco de testes, descrevendo a funcionalidade a ser testada
describe('Acessando o forms', function() {

  // Antes de cada teste, acessa a página do formulário
  beforeEach(function (){
    cy.visit('./FormularioBasicoDvs/formulario.html')   
  })

  // Testa o título da página
  it('verifica o título', function() {
    cy.title().should('be.equal', 'Cadastro')  // Verifica se o título da página é 'Cadastro'
  })

  // Testa o envio do formulário
  it('Verificar envio de formulario', () =>{

    // Preenche os campos de nome, sobrenome e email do formulário
    cy.get('#nome').type('Ana Luiza')
    cy.get('#sobrenome').type('Dias')
    cy.get('#email').type('andreza@hotmail.com')

    // Marca o radio button 'fullstack' e verifica a presença do campo de experiência adicional
    if(cy.get('input[type="radio"][name="devweb"][value="fullstack"]').check() == 'fullstack'){
      cy.get('#campo-experiencia-adicional > label').should('exist')   // Verifica se o campo existe
      .and('be.visible');  // Verifica se o campo está visível
    }
    
    // Seleciona a opção 'Pleno' no campo de senioridade e verifica sua visibilidade
    cy.get('#senioridade').select('Pleno')
    .should('be.visible', 'Pleno')

    // Marca todos os checkboxes e verifica se estão selecionados
    cy.get('input[type="checkbox"]') 
       .each(type0Service =>{
           cy.wrap(type0Service)  // Wrap para garantir que o Cypress aguarde a execução de cada item
               .check()  // Marca o checkbox
               .should('be.checked')  // Verifica se o checkbox está marcado
       })

    // Preenche o campo de experiência com o texto especificado e verifica se o valor foi inserido corretamente
    cy.get('#experiencia').invoke('val','Um texto de experiência' ).should('have.value', 'Um texto de experiência')

    // Preenche o campo de experiência adicional e verifica se o valor foi inserido corretamente
    cy.get('#experiencia-adicional').invoke('val','Um texto de experiência adicional' ).should('have.value', 'Um texto de experiência adicional') 

    // Encontra o link 'Concluído', remove o atributo 'target' e clica nele
    cy.contains('a', 'Concluído')
      .invoke('removeAttr', 'target')
      .click()
  
    // Verifica se a mensagem 'Cadastro Concluído!' está visível após o clique
    cy.contains('h1', 'Cadastro Concluído!').should('be.visible')    

    // Clica no botão para voltar à página anterior
    cy.get('a[class="botao"]').click()
  })
  it('Validar se o formulário é enviado sem preencher os campos obrigatórios (Forms em branco)', () =>{

    cy.get('a[class="botao"]').click()

    cy.get('.erro-message').should('be.visible');
  })
  it('Marca todos os checkbox: qual aplicação você desenvolve:', () =>{
    cy.get('input[type="radio"]') 
        .each(type0Service =>{
            cy.wrap(type0Service)
                .check()
                .should('be.checked')
        })
  })

})
