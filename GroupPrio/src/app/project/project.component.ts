import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  items: Array<string> = [];
  title: string = "";
    isMultipleSubmissionsAllowed:boolean=false;
    @ViewChild('newItem') newItem:any;

  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  addItem(item:string){
    this.items.push(item);
    this.newItem.nativeElement.value='';
  }

  removeItem(item:string){
   const index=this.items.indexOf(item);
   if (index !==-1)
   this.items.splice(index,1);
  }

  createProject(): void {
    this.service.createProject(this.title, this.items, this.isMultipleSubmissionsAllowed).subscribe(
      project => {
        this.router.navigate([project.id], {relativeTo: this.route});
      });
  }
}
