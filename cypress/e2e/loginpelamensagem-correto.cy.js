describe('Pagina de Login', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();  
    })
    it('O Usuario precisa fazer o login com sucesso', () => {
      cy.get('[data-test="input-loginEmail"]').type('voltane@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();      
    })
  })