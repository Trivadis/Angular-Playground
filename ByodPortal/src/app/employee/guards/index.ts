import { EmployeeGuard } from './employee.guard';
import { DeviceGuard } from './device.guard';
import { EmployeeEditGuard } from './employee-edit.guard';

export const guards: any[] = [EmployeeGuard, DeviceGuard, EmployeeEditGuard];

export * from './employee.guard';
export * from './device.guard';
export * from './employee-edit.guard';
