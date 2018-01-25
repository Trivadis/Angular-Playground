import { NgModule, Optional, SkipSelf } from '@angular/core';

import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { throwIfAlreadyLoaded } from '../core/module-import-guard';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, SharedModule],
  exports: [],
  declarations: [StandardLayoutComponent, WelcomeComponent],
  providers: []
})
export class StandardLayoutModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StandardLayoutModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'StandardLayoutModule');
  }
}
