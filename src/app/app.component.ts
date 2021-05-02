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
  equipo$: Observable<{
    strTeam: string;
    strTeamLogo: string;
    strDescriptionEN: string;
  }>;
  constructor(apiService: ApiService) {
    this.equipo$ = apiService.getTeamById('133604').pipe(
      tap((teams) => console.log(teams)),
      map((result) => result.teams[0])
    );
  }
}
