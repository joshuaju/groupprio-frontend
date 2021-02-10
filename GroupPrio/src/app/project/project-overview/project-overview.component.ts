import {Component, OnInit} from '@angular/core';
import {OverviewProject} from '../../entities/OverviewProject';
import {ProjectService} from '../project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  projects: OverviewProject[] = [];

  constructor(private projectService: ProjectService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(currentProjects => this.projects = currentProjects);
  }

  navigateToProject(id: string): void {
    this.router.navigate([id], {relativeTo: this.route});
  }

  navigateToProjectCreation(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
