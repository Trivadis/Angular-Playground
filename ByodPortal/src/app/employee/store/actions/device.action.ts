import { Device } from './../../models/device.model';
import { Action } from '@ngrx/store';


export enum DeviceActionTypes {
    LoadDevices = '[Device] Load Device',
    LoadDevicesSuccess = '[Device] Load Device Sucess',
    LoadDevicesFail = '[Device] Load Device Fail',
}

export class LoadDevices implements Action {
    readonly type = DeviceActionTypes.LoadDevices;
  }

  export class LoadDeviceFail implements Action {
    readonly type = DeviceActionTypes.LoadDevicesFail;
    constructor(public payload: any) {}
  }

  export class LoadDeviceSuccess implements Action {
    readonly type = DeviceActionTypes.LoadDevicesSuccess;
    constructor(public payload: Device[]) {}
  }

// action types
export type DeviceActions =
  | LoadDevices
  | LoadDeviceSuccess
  | LoadDeviceFail
  ;
