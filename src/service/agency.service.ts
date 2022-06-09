import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agency } from 'src/model/Agency-model';
@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http:HttpClient) { }
  findAll()
  {
    return this.http.post<any>("http://localhost:8080/agency/all",[])
  }
  delete([id]:[number])
  {
    console.log(id);
    return this.http.post<any>("http://localhost:8080/agency/delete",[id])
  }
  persiste([agency] : [Agency])
  {
    console.log(agency)
    return this.http.post('http://localhost:8080/agency/save',agency)
  }
  update([agency]:[Agency])
  {
    return this.http.post<any>("http://localhost:8080/agency/update",[agency])
  }
}
