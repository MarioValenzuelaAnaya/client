import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'register',component:RegisterComponent},
  {path: 'members',component:MemberListComponent},
  {path: 'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
