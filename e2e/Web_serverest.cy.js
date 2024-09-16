describe('Automaçao WEB Serverest', () => {
    beforeEach('Realiza Login no sistema', function() {
        cy.Verif_login()
    });
    it('Teste Negativo - Usuário já cadastrado anteriormente', function() {
        cy.Login()
    });
    it('Cadastra Produto no sistema', function() {
        cy.Cad_Prod()
    }); 
    it('Lista Produto cadastrado', function() {
        cy.Lista_Prod()
    });
    it('Exclui usuário do sistema', function() {
        cy.Del_User()
    });
    it('Excluir Produto do site', function() {
        cy.Del_Prod()
    });
  });
