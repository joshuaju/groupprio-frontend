import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PrioritizationService } from './prioritization.service';

@Component({
  selector: 'app-prioritize',
  templateUrl: './prioritize.component.html',
  styleUrls: ['./prioritize.component.scss']
})
export class PrioritizeComponent implements OnInit {
  name: any;

  prioitems : Array<string> = [];
  constructor(
    private route: ActivatedRoute,
    private service: PrioritizationService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> {
      this.name = params['param'];
      this.service
      .getPrioItems("123")
      .subscribe(
        items => {
          this.prioitems = items;
        })
    });
  }

  submit(){
    this.service.submitPrio(this.prioitems);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.prioitems, event.previousIndex, event.currentIndex);
  }
}
