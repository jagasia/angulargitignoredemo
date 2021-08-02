import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:8080/user';
  constructor(private http:HttpClient) { }

  signup(user:any)
  {
    return this.http.post(this.url,user);
  }

  getAllUser()
  {
    return this.http.get(this.url);
  }

  login(id:string, password:string)
  {
    return this.http.get(this.url+"/"+id+"/"+password);
  }

  modifyUser(user:any):Observable<object>
  {
    return this.http.put(this.url,user);
  }

  removeUser(id:string)
  {
    return this.http.delete(this.url+"/"+id);
  }
}
