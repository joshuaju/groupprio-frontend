import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrioProject } from '../entities/PrioProject';
import { Submission } from '../entities/Submission';

@Injectable({
  providedIn: 'root'
})
export class PrioritizationService {
  endpoint = "/project"
  constructor(private http: HttpClient) { }

  getPrioItems(id: string): Observable<PrioProject>{
    var url = `${environment.apiUrl}${this.endpoint}/${id}`;
    return this.http.get<PrioProject>(url);
  }

  submitPrio(prio: string[], id: string): Observable<any>{
    var url = `${environment.apiUrl}${this.endpoint}/${id}/submission`;
    const submission = new Submission(prio);
    return this.http.post<any>(url, submission);
  }
}
