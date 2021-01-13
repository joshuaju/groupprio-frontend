import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrioritizeComponent } from './prioritize/prioritize.component';
import { ProjectComponent } from './project/project.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'project', component: ProjectComponent}, 
  { path: 'project/:id', component: StatusComponent}, 
  { path: 'project/:id/prioritization', component: PrioritizeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
