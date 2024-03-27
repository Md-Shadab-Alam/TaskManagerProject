import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  urlPrefix: string = "http://localhost:54573/";

  constructor(private httpClient: HttpClient) 
  {
  }
  getAllProjects():Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects");
  }

  insertProject(newProject:Project):Observable<Project>
  {
    return this.httpClient.post<Project>("/api/projects",newProject);
  }
}


