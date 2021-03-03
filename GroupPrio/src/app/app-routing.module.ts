import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrioritizeComponent} from './prioritize/prioritize.component';
import {ProjectComponent} from './project/project.component';
import {StatusComponent} from './status/status.component';
import {ProjectOverviewComponent} from './project/project-overview/project-overview.component';

const routes: Routes = [
  {path: '', component: ProjectOverviewComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'project/:id', component: StatusComponent},
  {path: 'project/:id/prioritization', component: PrioritizeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
