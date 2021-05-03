import { TestBed, getTestBed, tick, fakeAsync} from '@angular/core/testing';
import { ApiService } from './api.service';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpService: HttpTestingController;
  let injector: TestBed;
  beforeEach(() => {
    injector = getTestBed();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    httpService = injector.get(HttpTestingController);
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get team by id', (doneFn) => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
    const teamId = 140793;

    service.getTeamById(teamId).subscribe(team => {
      doneFn();
    });
    const req = httpService.expectOne({method: 'GET', url: url+teamId});
    req.flush({'id': 140793, 'name': '90'});
  });

  it('should list all teams', () => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
    const teams = service.listOfTeams();

    const teamsId = [140793, 138159, 138230, 138228, 138220, 138221,138223, 138224, 141124, 138225, 138227, 140792, 138229, 138231, 138219, 138232, 138233];

    teamsId.forEach(teamId => {
      httpService.expectOne({method: 'GET', url: url+teamId}).flush({teams: [{'id': teamId, 'name': '90'}]});
    });

    expect(teams.length).toBe(17);
  });
});
