import { Injectable } from '@angular/core';

//To Make it accessable globally type:-
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class DashboardService {

  getTeamMembersSummery(): any[]
  {  
    var TeamMembersSummary=[
      {Region:"North",TeamMembersCount:20,TemporarilyUnavailableMembers:4,},
      {Region:"East",TeamMembersCount:15,TemporarilyUnavailableMembers:6,},
      {Region:"West",TeamMembersCount:13,TemporarilyUnavailableMembers:14,},
      {Region:"South",TeamMembersCount:22,TemporarilyUnavailableMembers:9,},
    ];
    return TeamMembersSummary;
  }
}
