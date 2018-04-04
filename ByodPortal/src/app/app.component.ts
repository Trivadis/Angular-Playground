import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.setDefaultLang("en-US");
    translate.use("en-US");
  }

}