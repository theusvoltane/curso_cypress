describe('Api Adopet', ()=>{

    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNDJiOGMxMy0xNDc0LTQ3ZGYtYjRjZC1lZDg3ZmNlNDE5NWMiLCJhZG9wdGVyTmFtZSI6Ik1hdGhldXMgUGxvbWJvbiIsImlhdCI6MTczNDEwMDg0NiwiZXhwIjoxNzM0MzYwMDQ2fQ.nLwhfKGy1WlAB5HiXUOj9Wd6E2cH10VMmiUF2TtxngE'
    
    it('Mensagens da Api', ()=>{
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers:{authorization}    
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })    
    })
})