//exemplo de criar comando para efetuar login
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('button[type="submit"]').click();
})

//exemplo de criar comando para efetuar registrar
Cypress.Commands.add('registra', (email, fullNome, userName, password) => {
    cy.contains('a', 'register now').click();
    cy.contains('button', 'register').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(fullName);
    cy.get('input[formcontrolname="userName"]').type(userNme);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.get('button[type="submit"]').click();
})

