import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient, HttpHeaders}from '@angular/common/http'
import { Member } from '../_models/members';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseUrl= environment.apiUrl;
 
  constructor(private http: HttpClient) { }

   getMembers(){
    return this.http.get<Member[]>(this.baseUrl+'Member',httpOptions);
   }

   getMember(id){
    return this.http.get<Member>(this.baseUrl+'Member/'+id,httpOptions);
   }

   register(model: any) {
    return this.http.post(this.baseUrl + 'Member/register', model,httpOptions);
      
    
  }
  delete(model: any) {
    return this.http.post(this.baseUrl + 'Member/Delete', model,httpOptions);
      
    
  }
  Update(model: any) {
    return this.http.post(this.baseUrl + 'Member/Update', model,httpOptions);
      
    
  }

}
