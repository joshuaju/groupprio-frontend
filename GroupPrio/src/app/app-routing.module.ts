import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrioritizeComponent } from './prioritize/prioritize.component';
import { ProjectComponent } from './project/project.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'prioritize', component: PrioritizeComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'status', component: StatusComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
