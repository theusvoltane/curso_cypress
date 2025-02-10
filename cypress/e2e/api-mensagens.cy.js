describe('Api Adopet', ()=>{
    
    it('Mensagens da Api', ()=>{
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/c42b8c13-1474-47df-b4cd-ed87fce4195c',
            headers: Cypress.env()  
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })    
    })
})