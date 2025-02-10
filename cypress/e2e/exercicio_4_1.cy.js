describe('exercicio 41', () => {

  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click(); 
    cy.login('matheus@email.com','Senha123');
    cy.get('.menu__button').click(); 
    cy.get('.button').click(); 
    })

    it('Perfil da Api', ()=>{
      cy.request({
          method: 'GET',
          url:'https://adopet-api-i8qu.onrender.com/adotante/perfil/c42b8c13-1474-47df-b4cd-ed87fce4195c',
          headers: Cypress.env()  
      }).then((res) => {
          expect(res.status).to.be.equal(200)
          expect(res.body).is.not.empty
          expect(res.body).to.have.property('perfil')
          expect(res.body.perfil.nome).to.be.equal('Matheus Plombon')
      })    
  })
})