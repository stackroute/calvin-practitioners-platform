import { browser, by, element } from 'protractor';

export class CalvinCommunitiesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('calvin-root h1')).getText();
  }
}
