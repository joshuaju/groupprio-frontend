import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../entities/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  endpoint = '/project';
  cookieHeader = new HttpHeaders({
    clientid: this.cookieService.get('clientId'),
  });

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  createProject(title: string, items: string[], isMultipleSubmissionsAllowed:boolean): Observable<Project> {
    return this.http.post<Project>(environment.apiUrl + this.endpoint, {
      title,
      items,
    isMultipleSubmissionsAllowed,
    }, {headers: this.cookieHeader});
  }
}
