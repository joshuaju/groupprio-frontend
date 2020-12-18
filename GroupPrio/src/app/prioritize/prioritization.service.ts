import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrioritizationService {

  constructor() { }

  getPrioItems(id: string): Observable<string[]>{
    return of(["abc","def", "xyz"]);
  }

  submitPrio(prio: string[]){
    console.log("submitted: "+ prio);
  }
}
