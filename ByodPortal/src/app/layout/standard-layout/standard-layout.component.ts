import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: 'standard-layout.component.html'
})
export class StandardLayoutComponent implements OnInit {
    
    constructor(private translate: TranslateService) { }

    ngOnInit() { }

    changeLocale(locale: string): void {
        this.translate.use(locale);
    }

    isActiveLocale(locale: string): boolean {
        return this.translate.currentLang === locale;
    }

}