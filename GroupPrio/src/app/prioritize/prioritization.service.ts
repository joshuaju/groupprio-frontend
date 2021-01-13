import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrioProject } from '../entities/PrioProject';
import { Submission } from '../entities/Submission';

@Injectable({
  providedIn: 'root'
})
export class PrioritizationService {
  baseUrl = "http://localhost:4567"
  constructor(private http: HttpClient) { }

  getPrioItems(id: string): Observable<PrioProject>{
    var url = `${this.baseUrl}/project/${id}`;
    return this.http.get<PrioProject>(url);
  }

  submitPrio(prio: string[], id: string): Observable<Submission>{
    var url = `${this.baseUrl}/project/${id}/submission`;
    const submission= new Submission(prio);
    return this.http.post<Submission>(url, submission);
  }
}
