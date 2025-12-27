describe('avatar_buying', function () {

    it('avatar_changing', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type('{user_login}');
        cy.get('#k_password').type('{user_password}').type('{enter}');
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.card_number').type('4620869113632996');
        cy.get('.card_csv').type('125');
        cy.get('.card_date').type('1226');
        cy.get('.card_name').type('German');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.threeds_number').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    })
}) 