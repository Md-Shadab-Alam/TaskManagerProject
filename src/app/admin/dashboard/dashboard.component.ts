import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
{

  Designations: string = "";
  Username:string = "";
  NoOfTeamMembers:number = 0;
  TotalCostOfAllProject:number = 0;
  PendingTasks:number= 0;
  UpCommingProject: number= 0;
  ProjectCost:number= 0;
  currentExpenditure: number= 0;
  AvailableFunds: number= 0;

  Clients: string[]=[];
  Projects: string[]=[];
  Years: number[]=[];
  TeamMembersSummary: any =[];
  TeamMembers: any =[];

  constructor(private dashboardService: DashboardService){

  }

  ngOnInit() 
  {
    this.Designations = "Team Leader";
    this.Username = "Shadab";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProject = 240;
    this.PendingTasks = 15;
    this.UpCommingProject = 2;
    this.ProjectCost = 2113507;
    this.currentExpenditure = 96788;
    this.AvailableFunds = 52536;
  
this.Clients=[
  "ABC Infotech","DEF Software", "GHI Industries"
];

this.Projects=[
  "Project A","Project B","Project C","Project D"
];

// this.Years=[
//   2019,2020,2021,2022,2023,2024]
for(var i=2024; i>=2018; i--){
  this.Years.push(i);
}

this.TeamMembersSummary=this.dashboardService.getTeamMembersSummery();

this.TeamMembers=[
  {
    Region:"North", Members:[
      {ID:1,Name:"Shadab",Status:"Available"},
      {ID:2,Name:"Alam",Status:"Available"},
      {ID:3,Name:"AB",Status:"Available"},
      {ID:4,Name:"CD",Status:"Available"}
    ]
  },
  {
    Region:"East", Members:[
      {ID:1,Name:"Shadab",Status:"Available"},
      {ID:2,Name:"St",Status:"In Meeting"},
      {ID:3,Name:"Uv",Status:"Busy"},
      {ID:4,Name:"XYZ",Status:"Available"}
    ]
  },
  {
    Region:"West", Members:[
      {ID:1,Name:"Shadab",Status:"Available"},
      {ID:2,Name:"MN",Status:"Available"},
      {ID:3,Name:"OP",Status:"Offline"},
      {ID:4,Name:"QR",Status:"Available"}
    ]
  },
  {
    Region:"South", Members:[
      {ID:1,Name:"Shadab",Status:"Available"},
      {ID:2,Name:"PD",Status:"Busy"},
      {ID:3,Name:"AB",Status:"Busy"},
      {ID:4,Name:"CD",Status:"Available"}
    ]
  }
];
}

onProjectChange($event)
{
  //console.log($event.target.innerHTML)
  if($event.target.innerHTML == "Project A")
  {
    this.ProjectCost = 2113507;
    this.currentExpenditure = 96788;
    this.AvailableFunds = 52536;
  }
  else if($event.target.innerHTML == "Project B")
  {
    this.ProjectCost = 123456;
    this.currentExpenditure = 456747;
    this.AvailableFunds = 724536;
  }
  else if($event.target.innerHTML == "Project C")
  {
    this.ProjectCost = 211346467;
    this.currentExpenditure = 56788;
    this.AvailableFunds = 34567546;
  }
  else if($event.target.innerHTML == "Project D")
  {
    this.ProjectCost = 2426754
    this.currentExpenditure = 76788;
    this.AvailableFunds = 140006;
  }
}
}