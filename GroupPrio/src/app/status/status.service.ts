import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeightedProject} from '../entities/WeightedProject';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  baseUrl="http://localhost:4567/project/";

  constructor(private http: HttpClient) { }


  getProjectState(id:string): Observable<WeightedProject>{
    var url = `${this.baseUrl}${id}/prioritization`
    return this.http.get<WeightedProject>(url);
    //return of(new WeightedProject(id,["abc","def"]));
  }
}
