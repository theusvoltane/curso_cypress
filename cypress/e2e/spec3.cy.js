describe('clicar no botão ver pets', () => {
  it('clik no botão', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__message').click();
    cy.get('.header__home').click();
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click()

  })
})