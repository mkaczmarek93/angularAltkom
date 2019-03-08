import { browser, logging } from 'protractor';

import { UserLoginPage } from './page-objects/user-login-form.po.';

describe('workspace-project App', () => {
    let page: UserLoginPage;

    beforeEach(() => {
        page = new UserLoginPage();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

    it('should redirect to user profile page after successful login', () => {
        page.navigateTo();
        page.emailField().sendKeys('jan@kowalski.pl');
        page.passwordField().sendKeys('Password');
        page.submit().click();
        expect(page.currentUrl()).toContain('/user/profile');
    });

    it('should display error message after put incorrect values ', () => {
        page.navigateTo();
        page.emailField().sendKeys('jan@kowalski.pl');
        page.passwordField().sendKeys('Password111');
        page.submit().click();
        expect(page.resultMessage().getText()).toContain('Niepoprawny');
    });
});
