
describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

    it('efetuar login com usuario valido', () => {
       cy.login('flavio', '123')
       cy.contains('a', '(Logout)').should('be.visible');
      
       
    })

    it('efetuar login com usuario invalido', () => {
        cy.login('Carlos', '1234')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user or password')
        })
    })
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it(`registra novo usuário ${usuario.usernmae}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
    
        })
    })
   
})
