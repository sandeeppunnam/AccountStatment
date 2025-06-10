import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementLandingComponent } from './statement-landing.component';

describe('StatementLandingComponent', () => {
  let component: StatementLandingComponent;
  let fixture: ComponentFixture<StatementLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatementLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatementLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
