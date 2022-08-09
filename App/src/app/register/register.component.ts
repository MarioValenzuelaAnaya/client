import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../_models/members';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
member:Member
registerForm: FormGroup;
  constructor(private fb: FormBuilder, private memberService: MembersService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.intitializeForm();
  }

  intitializeForm() {
    this.registerForm = this.fb.group({
      name: ['',Validators.required],
      lastName: ['',Validators.required],
      adress: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      description: ['test', Validators.required],
      phoneNumer: ['', Validators.required]     
    })

    
  }

  register(){
    this.memberService.register(this.registerForm.value).subscribe(Response=>{
      this.router.navigateByUrl('/members');  
    },error=>{
      console.log("error");
    });
    
  }
}
