import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  getUser(item){
    return this.http.post('http://localhost:3000/users',{"username":item})
    .subscribe(data =>{console.log(data)})
    
  }

  constructor(private http:HttpClient) { }
}
