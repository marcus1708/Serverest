const login = require('../fixtures/login.json')
const cria_usuario = require('../fixtures/cria_usuario.json')
const atual_usuario = require('../fixtures/atual_usuario.json')
const cria_produto = require('../fixtures/cria_produto.json')
const atual_produto = require('../fixtures/atual_produto.json')

describe('API do Serverest', () =>{
    let id; 
    let id_p; 
    let id_c;
    
    it('Cadastra Usuário', () => {
        cy.cad_user(cria_usuario)
    })
    it('Teste de Falha - Cadastra Usuário já existente', () => {
        cy.cad_user_existente(cria_usuario)
    })
    it('Realiza Login', () => {
        cy.login(login)
    })        
    it('Cadastra Produtos', () => {
        cy.cad_prod(cria_produto)
    })
    it('Teste de Falha - Cadastra Produto já existente', () => {
        cy.cad_prod_existente(cria_produto)
    })
    it('Busca Usuário Lista', () => {
        cy.busc_user()
    })
    it('Busca Usuário ID', () => {
        cy.busc_user_id()
    })
    it('Teste de Falha - Busca Usuário ID inválido', () => {
        cy.busc_user_id_inv()
    })
    it('Busca Produtos Lista', () => {
        cy.busc_prod()
    })
    it('Busca Produto ID', () => {
        cy.busc_prod_id()
    })
    it('Teste de Falha - Busca Produto ID inválido', () => {
        cy.busc_prod_id_inv()
    })
    it('Atualiza Usuário', () => {
        cy.atual_user(atual_usuario)
    })
    it('Teste de Falha - Atualiza Usuário inválido', () => {
        cy.atual_user_inv(atual_usuario)
    })
    it('Atualiza Produtos', () => {
        cy.atual_prod(atual_produto)
    })
    it('Teste de Falha - Atualiza Produto inválido', () => {
        cy.atual_prod_inv(atual_produto)
    })
    it('Cadastra Carrinho', () => {
        cy.cad_carr()
    })
    it('Teste de Falha - Cadastra Carrinho já existente', () => {
        cy.cad_carr_inv()
    })
    it('Busca Carrinho Lista', () => {
        cy.list_carr()
    })
    it('Busca Carrinho ID', () => {
        cy.carr_id()
    })
    it('Teste de Falha - Busca Carrinho com ID inválido', () => {
        cy.carr_id_inv()
    })
    it('Exclui Carrinho', () => {
        cy.del_carr()
    })
    it('Exclui Produtos', () => {
        cy.del_prod()
    })
    it('Exclui Usuário', () => {
        cy.del_user()
    })
    it('Teste de Falha - Exclui Carrinho já deletado anteriormente', () => {
        cy.del_carr_inv()
    })
    it('Teste de Falha - Exclui Produtos já deletado anteriormente', () => {
        cy.del_prod_inv()
    })
    it('Teste de Falha - Exclui Usuário já deletado anteriormente', () => {
        cy.del_user_inv()
    })
})
