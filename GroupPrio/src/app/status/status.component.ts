import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { StatusService } from './status.service';
import {WeightedProject} from '../entities/WeightedProject';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  projectId: string ="";
  project: any;

  constructor(
    private route: ActivatedRoute,
    private service: StatusService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> {
      this.projectId = params['projectId'];
      this.refreshProject();
      });
  }

  refreshProject() {
    this.service.getProjectState(this.projectId).subscribe(project=> {
                                             this.project = project});

  }

}
