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

  prioitems : Array<string> = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PrioritizationService
  ) { }

  ngOnInit(): void {
      this.service
      .getPrioItems(this.route.snapshot.params['id'])
      .subscribe(
        prioProject => {
          this.prioitems = prioProject.items;
        })
    
  }

  submit(){
    this.service.submitPrio(this.prioitems,this.route.snapshot.params['id']).subscribe();
  }
  
  getStatus(){
    this.router.navigate(['../'], {relativeTo:this.route});
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.prioitems, event.previousIndex, event.currentIndex);
  }
}
