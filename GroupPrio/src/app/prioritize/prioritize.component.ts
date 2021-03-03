import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PrioritizationService } from './prioritization.service';

@Component({
  selector: 'app-prioritize',
  templateUrl: './prioritize.component.html',
  styleUrls: ['./prioritize.component.scss'],
})
export class PrioritizeComponent implements OnInit {
  prioitems: Array<string> = [];
  submitted: boolean = false;
  isSubmissionAllowed: boolean = false;
  title: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PrioritizationService
  ) {}

  ngOnInit(): void {
    this.service
      .getPrioItems(this.route.snapshot.params['id'])
      .subscribe((prioProject) => {
        this.prioitems = prioProject.items;
        this.title = prioProject.title;
        this.isSubmissionAllowed = prioProject.isSubmissionAllowed;
      });
  }

  submit() {
    this.service
      .submitPrio(this.prioitems, this.route.snapshot.params['id'])
      .subscribe((response) => {
        this.isSubmissionAllowed = response.isSubmissionAllowed;
      });
  }

  getStatus() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.prioitems, event.previousIndex, event.currentIndex);
  }
}
