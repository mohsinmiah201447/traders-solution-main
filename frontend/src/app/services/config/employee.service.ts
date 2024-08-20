import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from 'src/app/model/config/manager.model';
import { AppResponse } from '../../dto/response.dto';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  constructor(private http: HttpClient, private config: ConfigService) { }

  getManagers(): Observable<AppResponse<Manager[]>> {
    const url = `${this.config.apiUrl}/employee/managers`;
    return this.http.get<AppResponse<Manager[]>>(url);
  }
}
