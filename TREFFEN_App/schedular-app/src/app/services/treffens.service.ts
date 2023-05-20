import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Treffen } from '../models/treffen.model';

@Injectable({
  providedIn: 'root'
})
export class TreffensService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  get_AllMeetings(): Observable<Treffen[]> {
    return  this.http.get<Treffen[]>(this.baseApiUrl + '/api/Treffen');
   }

   add_meeting(addMeetingRequest: Treffen): Observable<Treffen> {
   return  this.http.post<Treffen>(this.baseApiUrl + '/api/Treffen',addMeetingRequest);
  }

  get_meeting(Meeting_Id: string): Observable<Treffen> {
    return  this.http.get<Treffen>(this.baseApiUrl + '/api/Treffen/' + Meeting_Id);
  }

  update_meeting(Meeting_Id: number, updateEmployeeRequest: Treffen): Observable<Treffen> {
    return  this.http.put<Treffen>(this.baseApiUrl + '/api/Treffen/' + Meeting_Id, updateEmployeeRequest);
  }

  delete_meeting(Meeting_Id: number): Observable<Treffen>{
    return this.http.delete<Treffen>(this.baseApiUrl + '/api/Treffen/' + Meeting_Id);
  }
}
