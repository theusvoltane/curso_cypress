describe('Pagina Principal', () => {
    it('verifique se o title com o texto “AdoPet”', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('p','Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
  })