import { faker } from '@faker-js/faker';
describe('Automaçao WEB Serverest', () => {
    const name = faker.person.firstName();
    const senha = faker.internet.password();
    const Email = faker.internet.email();
    const qtidade = faker.number.int(10000);
    beforeEach('Realiza Login no sistema', function() {
        cy.Verif_login(Email,senha)
    });
    it('Teste Negativo - Usuário já cadastrado anteriormente', function() {
        cy.Login(name,Email,senha)
    });
    it  ('Cadastra Produto no sistema', function() {
        cy.Cad_Prod(name,qtidade)
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
