import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  createProject(name:string, items:string[]): Observable<string> {
    return of("1234");
  }
}
