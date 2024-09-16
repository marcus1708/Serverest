Cypress.Commands.add('Login', ()=>{
    cy.visit('https://front.serverest.dev/login')  
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('testeA')
    cy.get('[data-testid="email"]').type('testeA@teste.com')
    cy.get('[data-testid="password"]').type('testeA')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('be.visible')
})
Cypress.Commands.add('Verif_login', ()=>{
    cy.visit('https://front.serverest.dev/')
    cy.get('[data-testid="email"]').type('testeA@teste.com');
    cy.get('[data-testid="senha"]').type('testeA');
    cy.get('[data-testid="entrar"]').click()
    cy.get('h1').should('be.visible')
})

Cypress.Commands.add('Cad_Prod', ()=>{
    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type('PS5')
    cy.get('[data-testid="preco"]').type('400')
    cy.get('[data-testid="descricao"]').type('PS5')
    cy.get('[data-testid="quantity"]').type('200')
    cy.get('[data-testid="cadastarProdutos"]').click()
    cy.log('Produto cadastrado com sucesso')
})
Cypress.Commands.add('Lista_Prod', ()=>{
    cy.get('[data-testid="listarProdutos"]').click()
    cy.get(':nth-child(5) > :nth-child(6) > .row > .btn-danger').click()
    cy.log('Produto listado com sucesso')
})
Cypress.Commands.add('Del_User', ()=>{
    cy.get('[data-testid="listarUsuarios"]').click()
    cy.get(':nth-child(18) > :nth-child(5) > .row > .btn-danger').click()
    cy.log('Usuário excluído')
})
Cypress.Commands.add('Del_Prod', ()=>{
    cy.get('[data-testid="listarProdutos"]').click()
    cy.get(':nth-child(6) > :nth-child(6) > .row > .btn-danger').click()
    cy.log('Produto excluido com sucesso')
})
