import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeightedProject} from '../entities/WeightedProject';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  endpoint = "/project";

  constructor(private http: HttpClient) { }


  getProjectState(id:string): Observable<WeightedProject>{
    var url = `${environment.apiUrl}${this.endpoint}/${id}/prioritization`
    return this.http.get<WeightedProject>(url);
  }
}
