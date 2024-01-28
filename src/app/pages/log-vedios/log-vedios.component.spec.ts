import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogVediosComponent } from './log-vedios.component';

describe('LogVediosComponent', () => {
  let component: LogVediosComponent;
  let fixture: ComponentFixture<LogVediosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogVediosComponent]
    });
    fixture = TestBed.createComponent(LogVediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
