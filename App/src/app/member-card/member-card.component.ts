import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../_models/members';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor(private memberService:MembersService,private router: Router) { }

  ngOnInit(): void {
  }

  Delete()
  {
    this.memberService.delete(this.member).subscribe(Response=>{
      window.location.reload();
      this.router.navigateByUrl('/members');  
    },error=>{
      console.log("error");
    });
  }

}
