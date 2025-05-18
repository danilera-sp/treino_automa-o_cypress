describe('Teste de tela de Login Orange', () => {
    before('Acesso pagina de login - Orange', ()=>{
        cy.visit('/'); // Acessa a página de login
    })
    it('Login Credenciais invalidas', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('usuarioerrado')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('senhaerrada')

        cy.contains('Forgot your password?').click()
        cy.go('back')
        cy.url().should('include', '/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.contains('li', 'Usuário ou senha inválidos.').should('be.visible')
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
        cy.contains('Invalid credentials').should('be.visible');

    })

    it.only('Login Valido', ()=> {
        cy.contains('Forgot your password?').click()
        cy.go('back')
        cy.url().should('include', 'web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')


    })
})