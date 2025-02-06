describe('Pagina de Login', () => {
    beforeEach('Acesso a pagina de login',() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', ' https://adopet-api-i8qu.onrender.com/adotante/login');  
    })
    it('O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes', () => {
      
      cy.login('matheus@exemplo','Senha123');
      cy.contains('Por favor, verifique o email digitado').should('be.visible');      
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');

    })
  })