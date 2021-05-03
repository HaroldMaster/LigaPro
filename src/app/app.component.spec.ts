import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TeamCardComponent } from './team-card/team-card.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './core/services/api.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        TeamCardComponent
      ],
    }).compileComponents();
    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'LigaPro'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LigaPro');
  });
  it(`should call listOfTeams in the constructor`, () => {
    const service = TestBed.inject(ApiService);
    const spy = spyOn(service, 'listOfTeams');
    new AppComponent(service);
    expect(spy).toHaveBeenCalled();
  }
  );

});
