
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppCustomPreloader } from './core/app-custom-preloader';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { StandardLayoutComponent } from './layout/standard-layout/standard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },
      {
        path: 'employees',
        loadChildren: './employee/employee.module#EmployeeModule',
        data: { preload: false }
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
