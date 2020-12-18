import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeightedProject} from '../entities/WeightedProject';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }


  getProjectState(id:string): Observable<WeightedProject>{
    return of(new WeightedProject(id,["abc","def"]));
  }
}
