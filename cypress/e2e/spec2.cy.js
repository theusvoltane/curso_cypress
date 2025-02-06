describe('clicar no botão ver pets', () => {
  it('clik no botão', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Ver pets disponíveis para adoção').click();

  })
})