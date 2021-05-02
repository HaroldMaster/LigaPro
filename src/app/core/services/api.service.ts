import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
  private teamsId : { [key: string]: number } = {
    '9Octubre': 140793,
    'BarcelonaSc': 138159,
    'cdOlmedo':138230,
    'csdMacara':138228,
    'delfinSc':138220,
    'deportivoCuenca':138221,
    'emelec':138223,
    'guayaquilCity':138224,
    'guayaquilSc':141124,
    'independienteDelValle':138225,
    'lduQuito':138227,
    'manta':140792,
    'mushucRuna':138229,
    'orense':138231,
    'sdAcuas':138219,
    'tecnicoUniversitario':138232,
    'universidadCatolica':138233

  }
  private list : Array<Observable<any>> = [];
  constructor(private http: HttpClient) { }
  getTeamById(teamId:number): Observable<any>{
    return this.http.get(this._url+teamId);
  }
  listOfTeams(): Array<Observable<any>>{
    for(const team in this.teamsId){
      this.getTeamById(this.teamsId[team]).subscribe((resp:any)=>{
        this.list.push(resp.teams[0]);
      });
    }
    return this.list;
  }
}
