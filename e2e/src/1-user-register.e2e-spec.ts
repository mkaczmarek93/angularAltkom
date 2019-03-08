import { UserRegistrationPage } from './page-objects/user-registration-form.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
    let page: UserRegistrationPage;

    beforeEach(() => {
        page = new UserRegistrationPage();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

    it('should display success message after registration ', () => {
        page.navigateTo();
        page.emailField().sendKeys('jan@kowalski.pl');
        page.passwordField().sendKeys('Password');
        page.confirmPasswordField().sendKeys('Password');
        page.personNameField().sendKeys('Jan');
        page.personSurnameField().sendKeys('Kowalski');
        page.submit().click();
        expect(page.pageResult().getText()).toContain('Dziękujemy')
    });
});
