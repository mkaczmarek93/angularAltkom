import { browser, element, by } from 'protractor';

export class UserLoginPage {

    navigateTo() {
        return browser.get('/#/user/login');
    }

    emailField() {
        return element(by.css('.field-email'));
    }

    passwordField() {
        return element(by.css('.field-password'));
    }

    currentUrl() {
        return browser.getCurrentUrl();
    }

    submit() {
        return element(by.css('.button-submit'));
    }

    resultMessage() {
        return element(by.css('.login-result-message'));
    }
}
