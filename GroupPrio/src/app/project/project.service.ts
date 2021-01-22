import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../entities/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  endpoint = "/project"

  constructor(private http: HttpClient) { }

  createProject(title:string, items:string[]): Observable<Project> {
    return this.http.post<Project>(environment.apiUrl+this.endpoint, {title, items});
  }
}
