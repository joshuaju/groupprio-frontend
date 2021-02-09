import {Component, OnInit} from '@angular/core';
import {OverviewProject} from '../../entities/OverviewProject';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  projects: OverviewProject[] = [new OverviewProject('123', 'TestProject')];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects('123').subscribe(currentProjects => this.projects = currentProjects);
  }
}
