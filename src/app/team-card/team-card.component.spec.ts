import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TeamCardComponent } from './team-card.component';
import { teamCardSelectors as componentSelect } from './team-card.selectors';

describe('TeamCardComponent', () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit an event when view more', () => {
    //given
    const button = fixture.debugElement.query(By.css(componentSelect.teamCardFooter));
    const buttonSpy = spyOn(component.viewMore, 'emit');
    //when
    button.nativeElement.click();
    //expect
    expect(buttonSpy).toHaveBeenCalled();
  });
});
