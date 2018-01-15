import { NgModule } from '@angular/core';

import {DeviceListComponent } from './containers/device-list/device-list.component';
import { DeviceRoutingModule } from './device-routing.module';

@NgModule({
    imports: [
        DeviceRoutingModule
    ],
    exports: [],
    declarations: [DeviceListComponent],
    providers: [],
})
export class DeviceModule { }
