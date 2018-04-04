import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects, CustomSerializer } from './store';

// localizing imports, definitions & registrations
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeDECH from '@angular/common/locales/de-CH';

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDECH);

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { StandardLayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ?
[storeFreeze]
: [];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    StandardLayoutModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: TranslateLoaderFactory, deps: [HttpClient] }
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ],
  declarations: [AppComponent],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
