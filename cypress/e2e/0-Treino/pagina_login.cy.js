describe('Teste de tela de Login', () => {
    beforeEach('Acesso pagina de login', ()=>{
        cy.visit('/'); // Acessa a página de login
    })

    it.skip('Login - Primeiro acesso ', ()=> {
        cy.contains('Seja Bem Vindo ao MultiTMS')
        cy.get('#Usuario').type('pedro.delara@teste.com') // Insere o usuário
        cy.get('#Senha').type('torre') // Insere a senha
        cy.get('.btn').click()
        cy.contains('Atualização de Senha')
        cy.get('#senhaAtual').type('torre')
        cy.get('#novaSenha').type('user_teste-!@#')
        cy.get('#confirmacaoSenha').type('user_teste-!@#')
        cy.get('.btn').click()
        cy.get(':nth-child(7) > .header-icon > .fal').click()
        cy.get('.dropdown-menu > .fw-500')
    })

    it('Login - Credenciais invalidas', () => {
        cy.get('#Usuario').type('usuario_teste') // Insere o usuário
        cy.get('#Senha').type('senha123') // Insere a senha
        cy.contains('Seja Bem Vindo ao MultiTMS')
        cy.contains('Esqueci a Senha').click()
        cy.go('back')
        cy.url().should('include', '/Login')
        cy.get('#Senha').type('senha123')
        cy.get('.btn').click()
        cy.contains('li', 'Usuário ou senha inválidos.').should('be.visible')
    })

    it('login - Solicitar reset de Senha', () => {
        cy.contains('Seja Bem Vindo ao MultiTMS')
        cy.contains('Esqueci a Senha').click()
        cy.get('#usuario').type('pedro.delara@teste.com')
        cy.get('.btn').click()
        cy.get('li').contains('Solicitação de nova senha realizada.')
    })

    it('Login - Alterar senha, após reset', () =>{
        cy.contains('Seja Bem Vindo ao MultiTMS')
        cy.get('#Usuario').type('pedro.delara@teste.com') 
        cy.get('#Senha').type('torre')
        cy.get('.btn').click()
        cy.wait(300)
        cy.get('.subheader-title').contains('Seja bem-vindo, Pedro!')
        cy.get(':nth-child(7) > .header-icon').click()
        cy.get('#show-shorcutadeu > span').click()
        // Primeiro campo de senha
        cy.get('input.form-control[type="password"]').eq(0).type('torre')
        // Segundo campo de senha
        cy.get('input.form-control[type="password"]').eq(1).type('user_teste-!@#')
        // Terceiro campo de senha
        cy.get('input.form-control[type="password"]').eq(2).type('user_teste-!@#')
        cy.contains('button', 'Alterar Senha').click();
        cy.saiDoSistema()
    })

    it('Login - Credenciais Validas ', ()=> {
        //cy.visit('/'); // Acessa a página de login
        cy.get('#Usuario').type('pedro.delara@teste.com') // Insere o usuário
        cy.get('#Senha').type('user_teste-!@#') // Insere a senha
        cy.wait(200)
        cy.contains('Seja Bem Vindo ao MultiTMS')
        cy.get('.btn').click()
        cy.get(':nth-child(7) > .header-icon > .fal').click()
        cy.get('.dropdown-menu > .fw-500').click()
    })
})