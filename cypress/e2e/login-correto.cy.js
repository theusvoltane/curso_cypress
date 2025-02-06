describe('Pagina de Login', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();  
    })
    it('O Usuario precisa fazer o login com sucesso', () => {

      cy.login('matheus@email.com','Senha123')
  
    })
  })