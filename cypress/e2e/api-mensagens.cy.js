describe('Api Adopet', ()=>{

    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNDJiOGMxMy0xNDc0LTQ3ZGYtYjRjZC1lZDg3ZmNlNDE5NWMiLCJhZG9wdGVyTmFtZSI6Ik1hdGhldXMgUGxvbWJvbiIsImlhdCI6MTczODg3MzQ4MywiZXhwIjoxNzM5MTMyNjgzfQ.A1FP3DYS28fQ1rCiBAUlzpURh-kMvKY9a6sDnjPhXZg'
    
    it('Mensagens da Api', ()=>{
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/adotante/login',
            headers:{authorization}    
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })    
    })
})