import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getUrl() {
    return browser.getCurrentUrl();
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  contactButton() {
    return element(by.css('body > app-root > div.container-fluid > app-menu > nav > ul.nav.float-left > li:nth-child(3) > a'));
  }
}
