describe('Pagina Principal', () => {
    it('verifique se o title com o texto “AdoPet”', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.title().should('eq', 'AdoPet');
    })
  })