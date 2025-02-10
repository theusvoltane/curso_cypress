describe('exercicio 41', () => {

  const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNDJiOGMxMy0xNDc0LTQ3ZGYtYjRjZC1lZDg3ZmNlNDE5NWMiLCJhZG9wdGVyTmFtZSI6Ik1hdGhldXMgUGxvbWJvbiIsImlhdCI6MTczOTIyNjAwMSwiZXhwIjoxNzM5NDg1MjAxfQ.1t90oisX4k2q_HkErNyZ58JBR4F1VkvZNPQZURb5Mk0'

  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click(); 
    cy.login('matheus@email.com','Senha123');
    cy.get('.menu__button').click(); 
    cy.get('.button').click(); 
    })

    it('Mensagens da Api', ()=>{
      cy.request({
          method: 'GET',
          url:'https://adopet-api-i8qu.onrender.com/adotante/perfil/c42b8c13-1474-47df-b4cd-ed87fce4195c',
          headers:{authorization}    
      }).then((res) => {
          expect(res.status).to.be.equal(200)
          expect(res.body).is.not.empty
          expect(res.body).to.have.property('perfil')
          expect(res.body.perfil.nome).to.be.equal('Matheus Plombon')
      })    
  })
})