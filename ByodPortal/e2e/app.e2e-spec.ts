import { AppPage } from './app.po';

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

});
