import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LigaPro';
  public teams :  any;
  /*equipo$: Observable<{
    strTeam: string;
    strTeamLogo: string;
    strDescriptionEN: string;
  }>;*/
  constructor(apiService: ApiService) {
    this.teams = apiService.listOfTeams();
  }
}

