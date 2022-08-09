import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../_models/members';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  member: Member;
  constructor( private route: ActivatedRoute,private memberService:MembersService,private router: Router) { }

  ngOnInit(): void {
   
this.loadMember(this.route.snapshot.paramMap.get("id"));

     
  }

  loadMember(id: string)
  {
    this.memberService.getMember(id).subscribe(member=>{
      this.member=member;
    })
    
  }

  Update()
  {
    this.memberService.Update(this.member).subscribe(Response=>{
      this.router.navigateByUrl('/members');  
      });
      

    
  }
 

}
