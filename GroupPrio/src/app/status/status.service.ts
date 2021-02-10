import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeightedProject } from '../entities/WeightedProject';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  endpoint = '/project';
  cookieHeader = new HttpHeaders({
    clientid: this.cookieService.get('clientId'),
  });

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getProjectState(id: string): Observable<WeightedProject> {
    var url = `${environment.apiUrl}${this.endpoint}/${id}/prioritization`;
    return this.http.get<WeightedProject>(url, { headers: this.cookieHeader });
  }
}
