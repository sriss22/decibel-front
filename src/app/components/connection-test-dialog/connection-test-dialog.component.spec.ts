import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionTestDialogComponent } from './connection-test-dialog.component';

describe('ConnectionTestDialogComponent', () => {
  let component: ConnectionTestDialogComponent;
  let fixture: ComponentFixture<ConnectionTestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionTestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionTestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
