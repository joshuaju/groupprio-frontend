import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Project} from '../entities/Project';
import {OverviewProject} from '../entities/OverviewProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  endpoint = '/project';

  constructor(private http: HttpClient) {
  }

  createProject(title: string, items: string[], isMultipleSubmissionsAllowed: boolean): Observable<Project> {
    return this.http.post<Project>(environment.apiUrl + this.endpoint, {title, items, isMultipleSubmissionsAllowed});
  }

  getProjects(id: string): Observable<OverviewProject[]> {
    const httpOptions = {
      headers: new HttpHeaders({clientId: id})
    };
    return this.http.get<OverviewProject[]>(environment.apiUrl + this.endpoint, httpOptions);
  }
}
