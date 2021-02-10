import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StatusService} from './status.service';
import {WeightedProject} from '../entities/WeightedProject';
import {environment} from 'src/environments/environment';
import {interval} from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  projectId = '';
  project: WeightedProject;
  prioLink = '';
  refreshTime: Date = new Date();
  refreshInterval = interval(10000);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StatusService
  ) {
    this.project = new WeightedProject('', [], 0);
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    this.prioLink =
      environment.frontendUrl +
      '/project/' +
      this.projectId +
      '/prioritization';
    this.refreshProject();
    this.refreshTime = new Date();
    this.refreshInterval.subscribe(() => this.refreshProject());
  }

  refreshProject(): void {
    this.service.getProjectState(this.projectId).subscribe((project) => {
      this.project = project;
    });
    this.refreshTime = new Date();
  }

  navigateToProjectOverview(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
