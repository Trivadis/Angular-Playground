import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo(url: string) {
        return browser.get(url);
    }

    getElement(selector: string) {
        return element(by.css(selector));
    }

    getText(selector: string) {
        return this.getElement(selector).getText();
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    search(search: string) {
        this.getElement('input[type="search"]').sendKeys(search);
    }

    getResult() {
        return element.all(by.css('table.table tbody tr'));
    }
}
