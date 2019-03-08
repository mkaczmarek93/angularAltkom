import { browser, element, by } from 'protractor';

export class UserRegistrationPage {

  navigateTo() {
    return browser.get('/#/user/register');
  }

  emailField() {
      return element(by.css('.field-email'));
  }

  passwordField() {
      return element(by.css('.field-password'));
  }

  confirmPasswordField() {
      return element(by.css('.field-confirm-password'));
  }

  personNameField() {
      return element(by.css('.field-person-name'));
  }

  personSurnameField() {
      return element(by.css('.field-person-surname'));
  }

  submit() {
      return element(by.css('.button-submit'));
  }

  pageResult() {
      return element(by.css('.registration-message'));
  }
}
