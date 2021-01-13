import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../entities/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  createProject(name:string, items:string[]): Observable<Project> {
    var url = 'http://localhost:4567/project'    
    return this.http.post<Project>(url, {name, items});
  }
}
