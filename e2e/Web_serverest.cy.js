describe('Automaçao WEB Serverest', () => {
    beforeEach('Realiza Login no sistema', function() {
        cy.Verif_login()
    });
    it('Teste Negativo - Usuário já cadastrado', function() {
        cy.Login()
    });
    it('Cadastra Produto', function() {
        cy.Cad_Prod()
    }); 
    it('Lista Produto', function() {
        cy.Lista_Prod()
    });
    it('Exclui usuário', function() {
        cy.Del_User()
    });
    it('Excluir Produto', function() {
        cy.Del_Prod()
    });
  });
