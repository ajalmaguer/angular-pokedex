import { browser, element, by } from 'protractor';

export class PokedexPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pd-root h1')).getText();
  }
}
