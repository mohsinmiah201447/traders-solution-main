import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Manager } from 'src/app/model/config/manager.model';
import { AppResponse } from 'src/app/dto/response.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {


  constructor(private http: HttpClient, private config: ConfigService) { }

  getManagers(): Observable<AppResponse<Manager[]>> {
    const url = `${this.config.apiUrl}/departments/managers`;
    return this.http.get<AppResponse<Manager[]>>(url);
  }
}
