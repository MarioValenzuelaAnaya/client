import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberCardComponent } from './member-card/member-card.component';
import { EditComponent } from './edit/edit.component';
import { MemberListComponent } from './member-list/member-list.component';
import{HttpClientModule } from '@angular/common/http';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavComponent,
    MemberCardComponent,
    EditComponent,
    MemberListComponent,
    TextInputComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
