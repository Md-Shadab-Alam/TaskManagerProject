import { Component, NgModule, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { catchError, of, tap} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent  implements OnInit{

  projects: Project[] = [];
  newProject: Project = new Project();
  constructor(private projectsService: ProjectsService){

  }
  
ngOnInit(){
  this.projectsService.getAllProjects().subscribe(
    (responce:Project[])=>{
      this.projects = responce;
    }
  );
}
onSaveClick()
{
  this.projectsService.insertProject(this.newProject).pipe(
    tap((response)=>{
      this.projects.push(this.newProject);
    }),
    catchError((error)=>{
      console.log(error);
        return of(null);
    })
    ).subscribe();
  
}
}

