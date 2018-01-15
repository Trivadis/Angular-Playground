
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppCustomPreloader } from './core/app-custom-preloader';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'test', component: AppComponent },
  {
    path: 'employees',
    loadChildren: './employee/employee.module#EmployeeModule',
    data: { preload: true }
  },
  {
    path: 'devices',
    loadChildren: './device/device.module#DeviceModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
