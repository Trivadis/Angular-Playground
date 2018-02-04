import { Device } from './../models/device.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, delay, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DeviceService {

    constructor(private http: HttpClient) { }

    getDevices(): Observable<Device[]> {
        return this.http
          .get<Device[]>(`${environment.apiBaseUrl}/devices`)
          .pipe(catchError((error: any) => Observable.throw(error)));
      }
}
