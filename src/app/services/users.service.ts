import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getAllFromUsers(){
    let configUrl = 'https://reqres.in/api/users?per_page=10000?total=10000'
    return this.http.get(configUrl);
  }

  public getOneFromUsers(id:number){
    let configUrl = `https://reqres.in/api/users/${id}`
    return this.http.get(configUrl);
  }

  public createOneInUsers(user){
    let configUrl = `https://reqres.in/api/users`
    return this.http.post(configUrl, user)
  }

  public updateOne(id, user){

    let configUrl = `https://reqres.in/api/users/${id}`
    return this.http.put(configUrl, user)
  }


}
