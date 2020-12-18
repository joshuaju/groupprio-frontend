import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    name: any;
    items:Array<string>=[];
    title='';
    @ViewChild('newItem') newItem:any;
  constructor(
    private route: ActivatedRoute,
    private service: ProjectService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> {
      this.name = params['param'];
    });
  }

  addItem(item:string){
    this.items.push(item);
    this.newItem.nativeElement.value='';
  }

  removeItem(item:string){
   const index=this.items.indexOf(item);
   if (index !==-1)
   this.items.splice(index,1);
  }

  submitProject(){
    this.service.createProject(this.title,this.items);
  }
}
