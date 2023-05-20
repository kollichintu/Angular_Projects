import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }


  get_AllUsers(): Observable<User[]> {
    return  this.http.get<User[]>(this.baseApiUrl + '/api/User');
   }

   add_user(addUserRequest: User): Observable<User> {
    addUserRequest.id = 0
   return  this.http.post<User>(this.baseApiUrl + '/api/User',addUserRequest);
  }



}
