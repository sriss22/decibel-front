import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbStatsComponent } from './db-stats.component';

describe('DbStatsComponent', () => {
  let component: DbStatsComponent;
  let fixture: ComponentFixture<DbStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
