import { Component, OnInit } from '@angular/core';
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
  project: WeightedProject;
  prioLink: string=""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StatusService
    ) {
      this.project = new WeightedProject("",[])
    }

  ngOnInit(): void {
      this.projectId = this.route.snapshot.params['id'];
      this.prioLink = "http://localhost:4200/project/"+this.projectId+"/prioritization"
      this.refreshProject();      
  }

  refreshProject() {
    this.service.getProjectState(this.projectId).subscribe(project=> {
                                             this.project = project});
                                             this.project.status = "22.01.2021 13:00 8 submissions";

  }

  prioritizeProject() {
    this.router.navigate(['prioritization'],{relativeTo : this.route})

  }

}
