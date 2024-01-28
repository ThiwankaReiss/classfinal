import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioComponent } from './vedio.component';

describe('VedioComponent', () => {
  let component: VedioComponent;
  let fixture: ComponentFixture<VedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VedioComponent]
    });
    fixture = TestBed.createComponent(VedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
