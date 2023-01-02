describe('Тестирование сайта staya', function () {
    it('Позитивный кейс авторизации', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click();
         cy.get('.auth-form > form > [type="email"]').type('ruslanqweewq@yandex.ru');
         cy.get('.auth-form > form > [type="password"]').type('Awsedrft1,');
         cy.get('.auth-form__submit > .s-button__content').click();
         cy.contains('Мои заказы')
    
     });

     it('Разлогиниться', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok > .s-button__content').click()

   
    });
     
     it('Негативный кейс авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('ruslanqweewq@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('Awsedrft1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.')
   
    })
})
