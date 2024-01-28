import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInstituteComponent } from './contact-institute.component';

describe('ContactInstituteComponent', () => {
  let component: ContactInstituteComponent;
  let fixture: ComponentFixture<ContactInstituteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInstituteComponent]
    });
    fixture = TestBed.createComponent(ContactInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
