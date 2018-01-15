import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AppCustomPreloader } from './app-custom-preloader';

// https://angular.io/guide/styleguide#core-feature-module

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [AppCustomPreloader]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
      }
    }

