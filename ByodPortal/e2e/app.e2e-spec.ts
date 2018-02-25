import { AppPage } from './app.po';
import { by, browser } from 'protractor';
import * as fs from 'fs';

describe('byod-portal App', () => {
    let page: AppPage;

    beforeEach(() => { page = new AppPage(); });

    it('should display welcome message', () => {
        page.navigateTo('/');
        expect(page.getText('app-root h2'))
            .toEqual('Byod Portal');
    });

    it('should navigate to byod page', () => {
        page.navigateTo('/');

        page.getElement('[ng-reflect-router-link="/employees"]')
            .click();

        expect(page.getCurrentUrl()).toContain('/employees');
    });

    it('should search correct', () => {
        page.navigateTo('/employees');

        page.search('Thomas');

        expect(page.getResult().count()).toEqual(3);
    });

    it('should edit a person correctly', () => {

        page.navigateTo('/employees');

        const linkEditBtn = page.getElement('a.btn-ok');
        linkEditBtn.click();

        // browser.takeScreenshot().then(png => {
        //     const stream = fs.createWriteStream(`screenshot-1.png`);
        //     stream.write(new Buffer(png, 'base64'));
        //     stream.end();
        //   });

    });

});
