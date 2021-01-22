import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { StatusService } from './status.service';
import {WeightedProject} from '../entities/WeightedProject';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  projectId: string =""
  project: WeightedProject
  prioLink: string=""
  refreshTime: Date = new Date()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StatusService
    ) {
      this.project = new WeightedProject("",[])
    }

  ngOnInit(): void {
      this.projectId = this.route.snapshot.params['id'];
      this.prioLink = environment.apiUrl+"project/"+this.projectId+"/prioritization"
      this.refreshProject()
      this.refreshTime= new Date()      
  }

  refreshProject() {
    this.service.getProjectState(this.projectId).subscribe(project=> {
                                             this.project = project});
                                             this.refreshTime= new Date()    
  }

  prioritizeProject() {
    this.router.navigate(['prioritization'],{relativeTo : this.route})

  }

}
