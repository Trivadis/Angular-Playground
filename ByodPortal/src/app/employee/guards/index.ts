import { EmployeeGuard } from './employee.guard';
import { DeviceGuard } from './device.guard';

export const guards: any[] = [EmployeeGuard, DeviceGuard];

export * from './employee.guard';
export * from './device.guard';
